import os
from uuid import uuid4

EVIDENCE_DIR = "evidence"

os.makedirs(EVIDENCE_DIR, exist_ok=True)

def save_evidence_file(content: bytes, ext=".mp4") -> str:
    fname = f"{uuid4().hex}{ext}"
    path = os.path.join(EVIDENCE_DIR, fname)
    with open(path, "wb") as f:
        f.write(content)
    return path
