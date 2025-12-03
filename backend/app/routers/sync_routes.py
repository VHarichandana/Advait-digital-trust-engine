from fastapi import APIRouter, UploadFile, File, Depends
from app.services import inference
from app.schemas import SimpleResult
from app.auth import verify_token

router = APIRouter(prefix="/sync", tags=["sync"])

@router.post("/lip_audio", response_model=SimpleResult)
async def lip_audio(video: UploadFile = File(...), audio: UploadFile = None, _=Depends(verify_token)):
    # Placeholder: compute cosine similarity between embeddings
    v = await video.read()
    score = round(0.8, 3)
    return SimpleResult(score=score, confidence=0.9)

@router.post("/head_audio", response_model=SimpleResult)
async def head_audio(video: UploadFile = File(...), audio: UploadFile = None, _=Depends(verify_token)):
    v = await video.read()
    score = round(0.75, 3)
    return SimpleResult(score=score, confidence=0.88)

