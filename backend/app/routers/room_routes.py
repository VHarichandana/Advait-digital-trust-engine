from fastapi import APIRouter, UploadFile, File, Depends
from app.services import inference, storage
from app.schemas import SimpleResult
from app.auth import verify_token

router = APIRouter(prefix="/room", tags=["room"])

@router.post("/multiperson", response_model=SimpleResult)
async def multiperson(video: UploadFile = File(...), _=Depends(verify_token)):
    v = await video.read()
    score = inference.detect_multiperson(v)
    return SimpleResult(score=score, confidence=0.9)

@router.post("/audio_anomaly", response_model=SimpleResult)
async def audio_anomaly(audio: UploadFile = File(...), _=Depends(verify_token)):
    b = await audio.read()
    score = inference.audio_anomaly(b)
    return SimpleResult(score=score, confidence=0.85)
