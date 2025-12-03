from fastapi import APIRouter, UploadFile, File, Depends
from app.services import inference
from app.schemas import SimpleResult
from app.auth import verify_token

router = APIRouter(prefix="/polygraph", tags=["polygraph"])

@router.post("/microexpressions", response_model=SimpleResult)
async def microexpressions(video: UploadFile = File(...), _=Depends(verify_token)):
    v = await video.read()
    res = inference.detect_microexpressions(v)
    return SimpleResult(score=res["score"], confidence=res["confidence"], details={})
