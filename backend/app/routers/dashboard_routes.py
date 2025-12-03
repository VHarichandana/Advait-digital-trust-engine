from fastapi import APIRouter, Depends, HTTPException
from app.auth import verify_token
from app.db import SessionLocal, SessionRecord
from typing import List
from app.schemas import ForensicScore

router = APIRouter(prefix="/dashboard", tags=["dashboard"])

@router.get("/integrity-score/{session_id}")
async def integrity_score(session_id: str, _=Depends(verify_token)):
    db = SessionLocal()
    rec = db.query(SessionRecord).filter(SessionRecord.session_id==session_id).first()
    db.close()
    if not rec:
        raise HTTPException(status_code=404, detail="Session not found")
    return {"session_id": rec.session_id, "integrity_score": rec.integrity_score, "metadata": rec.metadata}

@router.get("/timeline/{session_id}")
async def timeline(session_id: str, _=Depends(verify_token)):
    # placeholder timeline
    return {"session_id": session_id, "events": [{"time":"2025-12-03T10:00:00Z","event":"start"},{"time":"2025-12-03T10:01:00Z","event":"forensic_score"}]}

@router.get("/alerts/{session_id}")
async def alerts(session_id: str, _=Depends(verify_token)):
    return {"session_id": session_id, "alerts": []}
