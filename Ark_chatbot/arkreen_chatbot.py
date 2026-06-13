import os
import json
from typing import List
from langchain_groq import ChatGroq
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_core.documents import Document
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

# Configuration
from dotenv import load_dotenv
load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY", "your_groq_key_here")
HF_TOKEN = os.getenv("HUGGINGFACEHUB_API_TOKEN", "your_hf_token_here")
os.environ["HUGGINGFACEHUB_API_TOKEN"] = HF_TOKEN

class ArkreenRAG:
    def __init__(self):
        self.embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
        self.llm = ChatGroq(model="qwen/qwen3-32b",temperature=1.0)
        
        if os.path.exists(INDEX_PATH):
            self.vector_store = FAISS.load_local(INDEX_PATH, self.embeddings, allow_dangerous_deserialization=True)
        else:
            self.vector_store = self._initialize_vector_store()
            
        self.retriever = self.vector_store.as_retriever(search_kwargs={"k": 4})
        self.prompt = ChatPromptTemplate.from_template("""
        You are an AI documentation assistant specialized in Arkreen.
        Answer the question using ONLY the context below.

        <context>
        {context}
        </context>

        Guidelines:
        - Use bullet points where applicable
        - Mention tokens correctly ($AKRE)
        - Be concise and accurate
        - Add citation at the end (Section Title + URL)
        - If information is missing, say: "This information is not available in the Arkreen documentation."

        Question: {question}
        """)
        
        self.chain = (
            {"context": self.retriever, "question": RunnablePassthrough()}
            | self.prompt
            | self.llm
            | StrOutputParser()
        )

    def _initialize_vector_store(self):
        with open(DOCS_JSON, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        documents = [Document(page_content=item['content'], metadata={"url": item['url'], "title": item['title']}) for item in data]
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=600, chunk_overlap=120)
        chunks = text_splitter.split_documents(documents)
        
        vs = FAISS.from_documents(chunks, self.embeddings)
        vs.save_local(INDEX_PATH)
        return vs

    def web_search_fallback(self, query: str):
        # This is a simplified version of the fallback search
        # In a real production app, you'd use a search API like Tavily or SerpAPI
        # Here we simulate it by searching the existing docs or performing a targeted crawl
        print(f"Performing fallback search for: {query}")
        # For this demo, we'll return a message if not found in RAG
        return None

    def ask(self, question: str):
        # Check similarity score first
        docs_with_scores = self.vector_store.similarity_search_with_score(question, k=1)
        
        # FAISS score is L2 distance, so lower is better. 
        # A threshold of ~1.0-1.2 for all-MiniLM-L6-v2 is usually reasonable.
        if not docs_with_scores or docs_with_scores[0][1] > 1.5:
            fallback_result = self.web_search_fallback(question)
            if not fallback_result:
                return "This information is not available in the Arkreen documentation."
        
        return self.chain.invoke(question)

if __name__ == "__main__":
    rag = ArkreenRAG()
    while True:
        user_input = input("\nAsk Arkreen Bot (or 'exit'): ")
        if user_input.lower() == 'exit':
            break
        response = rag.ask(user_input)
        print(f"\nBot: {response}")
