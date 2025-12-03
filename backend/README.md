# ADAVIT Backend (Demo)

## Setup
1. create virtualenv: python -m venv venv
2. pip install -r requirements.txt
3. copy .env.example -> .env and edit if needed
4. run: uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

## Notes
- Endpoints require Authorization header "Bearer <token>" generated using auth.create_access_token.
- ML inference stubs live in app/services/inference.py — replace with real models.
- Evidence saved to ./evidence/
