from fastapi import APIRouter, Body, Depends
from app.auth import verify_token
import uuid

router = APIRouter(prefix="/pair", tags=["pair"])

@router.post("/initiate")
async def initiate_pair(payload: dict = Body(...), _=Depends(verify_token)):
    token = uuid.uuid4().hex
    return {"qr_token": token, "expires_in": 300}

@router.post("/validate")
async def validate_pair(token: dict = Body(...), _=Depends(verify_token)):
    # placeholder
    return {"paired": True, "message": "Pairing validated"}

