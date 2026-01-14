import urllib.request
import time
import sys

url = "http://localhost:3001"
expected_strings = [
    "Diseño y opero plataformas de datos",
    "Featured by Oracle",
    "Agenda una llamada o escribime",
    "sin romper operaciones críticas",
    "decisiones tácticas en tiempo real"
]

print(f"Checking {url}...")

try:
    with urllib.request.urlopen(url) as response:
        html = response.read().decode('utf-8')
        
    print("Page fetched successfully.")
    
    all_found = True
    for s in expected_strings:
        if s in html:
            print(f"[OK] Found: '{s}'")
        else:
            print(f"[FAIL] Not Found: '{s}'")
            all_found = False
            
    if all_found:
        print("\nSUCCESS: Final narrative polish verified.")
        sys.exit(0)
    else:
        print("\nFAILURE: Some elements were missing.")
        sys.exit(1)

except Exception as e:
    print(f"Error fetching {url}: {e}")
    sys.exit(1)
