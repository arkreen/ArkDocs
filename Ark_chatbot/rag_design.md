# Arkreen RAG Chatbot Design

## Architecture
- **Document Ingestion**: Crawl `docs.arkreen.com` using a recursive scraper.
- **Processing**: Chunk text into 600 tokens with 120 token overlap.
- **Vector Store**: FAISS (local, fast, efficient).
- **Embeddings**: OpenAI `text-embedding-3-small`.
- **LLM**: `gpt-4o` for high-quality reasoning and citation.
- **Fallback**: If retrieval score < 0.7, perform a targeted search on `docs.arkreen.com` using `google-search` (via `search` tool in this environment, but implemented as a search function in the final code).

## Tech Stack
- **LangChain**: Orchestration.
- **FAISS**: Vector database.
- **OpenAI**: Embeddings and LLM.
- **BeautifulSoup4**: Web scraping.
- **Requests**: HTTP client.

## Key Features
- **Strict Domain Constraint**: Only answers from `docs.arkreen.com`.
- **Live Search Fallback**: Automatically fetches new info if not in DB.
- **Citations**: Always includes source URLs.
- **No Hallucination**: Explicit "Not available" response if info is missing.
