from fastapi import APIRouter, UploadFile, File, Depends
from app.services import inference, storage
from app.schemas import VerifyResponse
from app.auth import verify_token
from app.db import SessionLocal, SessionRecord
import uuid
from fastapi import HTTPException

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/face/verify", response_model=VerifyResponse)
async def face_verify(file: UploadFile = File(...), _=Depends(verify_token)):
    content = await file.read()
    res = inference.infer_face_verification(content)
    # store session stub
    db = SessionLocal()
    session_id = uuid.uuid4().hex
    rec = SessionRecord(session_id=session_id, integrity_score=int((1-res["deepfake_probability"])*100), metadata=res)
    db.add(rec); db.commit(); db.close()
    return VerifyResponse(**res)
