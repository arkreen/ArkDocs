import os
from arkreen_chatbot import ArkreenRAG

def test_queries():
    rag = ArkreenRAG()
    queries = [
        "What is the AKRE token utility?",
        "Explain Arkreen staking rewards",
        "What is GreenBTC?",
        "How does Arkreen carbon offset work?"
    ]
    
    for query in queries:
        print(f"\nQuery: {query}")
        response = rag.ask(query)
        print(f"Response: {response}")

if __name__ == "__main__":
    test_queries()
