# Python challenge

## The challenge

I want a GitHub repo that contains a python script, along with any associated files, e.g.:

- An `.env` file
- A `requirements.txt` file
- A `.gitignore` file
- Instructions for setting up the repo, in a `readme.md` file

I want the Python script to make a request to an API of your choice. (It could be an API you've created, or one that you find online.). It would probably help if the API endpoint returns a different value every time it's called, e.g. a random piece of text.

Every time you call the Python script, it should make the HTTP request to the API, do something with the result (e.g. if it's a JSON file then select the actual content we're interested in), and print it in the terminal.

On top of that, it should also append a line to the end of a text file

(The text file should be listed in the `.gitignore` file too)

---

## Solution

### Directory Structure:

```
my_github_repo/
├── .env
├── .gitignore
├── README.md
├── requirements.txt
├── script.py
└── log.txt (this will be added to .gitignore)
```

### .env:

```plaintext
API_URL=https://icanhazdadjoke.com/
```

### .gitignore:

```plaintext
log.txt
.env
venv
```

### README.md:

```markdown
# My GitHub Repo

This repository contains a Python script that makes a request to a random joke API and logs the result.

## Setup Instructions

(copy these instructions in!)
```


### requirements.txt:
```plaintext
requests
python-dotenv
```

### script.py:
```python
import os
import requests
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

API_URL = os.getenv('API_URL')
LOG_FILE = 'log.txt'

def get_random_joke():
    response = requests.get(API_URL)
    if response.status_code == 200:
        data = response.json()
        return data.get('content')
    else:
        return None

def log_joke(joke):
    with open(LOG_FILE, 'a') as f:
        f.write(joke + '\n')

if __name__ == '__main__':
    joke = get_random_joke()
    if joke:
        print(joke)
        log_joke(joke)
    else:
        print('Failed to retrieve joke')
```

---

## Steps to run the solution

Create the files above

Create a virtual environment and activate it:

```sh
python3 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

Install the required packages:

```sh
pip install -r requirements.txt
```

Create a `.env` file in the root of the repository and add the API URL:

```plaintext
API_URL=https://icanhazdadjoke.com/
```

5. Run the script:
```sh
python script.py
```

Every time you run the script it should add a new line to the text file.
