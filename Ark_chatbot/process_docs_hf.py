import json
import os
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_core.documents import Document

def process_documents(json_file="arkreen_docs.json", index_path="faiss_index"):
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    documents = []
    for item in data:
        doc = Document(
            page_content=item['content'],
            metadata={
                "source": "Arkreen Docs",
                "url": item['url'],
                "title": item['title']
            }
        )
        documents.append(doc)
    
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=600,
        chunk_overlap=120,
        separators=["\n\n", "\n", " ", ""]
    )
    
    chunks = text_splitter.split_documents(documents)
    print(f"Created {len(chunks)} chunks from {len(documents)} pages.")
    
    # Using HuggingFace embeddings as a reliable local alternative
    embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
    
    vector_store = FAISS.from_documents(chunks, embeddings)
    vector_store.save_local(index_path)
    print(f"Vector store saved to {index_path}")

if __name__ == "__main__":
    process_documents()
