from pydantic import BaseModel
from typing import Optional, Dict, Any, List

class VerifyResponse(BaseModel):
    face_match: float
    liveness_status: bool
    deepfake_probability: float

class ForensicScore(BaseModel):
    deepfake_probability: float
    rppg_consistency: float
    lip_sync_score: float
    multi_person_probability: float
    integrity_score: int
    evidence_refs: Optional[List[str]] = []

class SimpleResult(BaseModel):
    score: float
    confidence: float
    details: Optional[Dict[str, Any]] = {}
