import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time
import json
import os

class ArkreenScraper:
    def __init__(self, base_url="https://docs.arkreen.com/"):
        self.base_url = base_url
        self.visited = set()
        self.data = []

    def is_valid(self, url):
        parsed = urlparse(url)
        return parsed.netloc == urlparse(self.base_url).netloc and url not in self.visited

    def scrape(self, url=None):
        if url is None:
            url = self.base_url
        
        if not self.is_valid(url):
            return

        print(f"Scraping: {url}")
        self.visited.add(url)
        
        try:
            response = requests.get(url, timeout=10)
            if response.status_code != 200:
                return
            
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Extract main content - Docusaurus usually uses <article> or main
            content_area = soup.find('article') or soup.find('main')
            if content_area:
                # Remove navigation, footer, etc. if they are inside
                for extra in content_area.find_all(['nav', 'footer', 'header']):
                    extra.decompose()
                
                text_content = content_area.get_text(separator='\n', strip=True)
                title = soup.title.string if soup.title else url
                
                self.data.append({
                    "url": url,
                    "title": title,
                    "content": text_content
                })

            # Find all links
            for a_tag in soup.find_all('a', href=True):
                link = urljoin(url, a_tag['href'])
                # Remove fragments
                link = link.split('#')[0]
                if self.is_valid(link):
                    # Be polite
                    time.sleep(0.1)
                    self.scrape(link)
                    
        except Exception as e:
            print(f"Error scraping {url}: {e}")

    def save(self, filename="/home/ubuntu/arkreen_docs.json"):
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(self.data, f, ensure_ascii=False, indent=4)
        print(f"Saved {len(self.data)} pages to {filename}")

if __name__ == "__main__":
    scraper = ArkreenScraper()
    # For the sake of time in this environment, we might want to limit or just run it
    # But I'll start it and see.
    scraper.scrape()
    scraper.save()
