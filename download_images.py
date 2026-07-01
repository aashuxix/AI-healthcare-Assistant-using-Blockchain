import os
import urllib.request
import urllib.parse
import json

images = {
    "covid": [
        "https://raw.githubusercontent.com/ieee8023/covid-chestxray-dataset/master/images/000001-1.jpg",
        "https://raw.githubusercontent.com/ieee8023/covid-chestxray-dataset/master/images/000001-10.jpg",
        "https://raw.githubusercontent.com/ieee8023/covid-chestxray-dataset/master/images/000001-11.jpg",
        "https://raw.githubusercontent.com/ieee8023/covid-chestxray-dataset/master/images/000001-12.jpg",
        "https://raw.githubusercontent.com/ieee8023/covid-chestxray-dataset/master/images/000001-13.jpg"
    ],
    "normal": []
}

def fetch_wiki_images(query, limit=5):
    url = f"https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages|images&generator=search&gsrsearch={urllib.parse.quote(query)}&gsrlimit={limit*2}&piprop=original"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    urls = []
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read())
            pages = data['query']['pages']
            for pid, page in pages.items():
                if 'original' in page and 'source' in page['original']:
                    src = page['original']['source']
                    if src.lower().endswith(('.jpg', '.jpeg', '.png')):
                        urls.append(src)
                        if len(urls) == limit: break
    except Exception as e:
        print("wiki err", e)
    return urls

images["normal"] = fetch_wiki_images("normal chest x-ray", 5)
images["pneumonia"] = fetch_wiki_images("pneumonia chest x-ray", 5)
images["tuberculosis"] = fetch_wiki_images("tuberculosis chest x-ray", 5)

os.makedirs("react-app/public/test_images", exist_ok=True)
for cls, urls in images.items():
    print(f"Downloading {cls} images...")
    for i, url in enumerate(urls):
        try:
            ext = 'jpg' if '.jpg' in url.lower() else 'png' if '.png' in url.lower() else 'jpeg'
            path = f"react-app/public/test_images/{cls}_{i}.{ext}"
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as response, open(path, 'wb') as out_file:
                out_file.write(response.read())
            print(f"  -> {path}")
        except Exception as e:
            print(f"Error downloading {url}: {e}")
