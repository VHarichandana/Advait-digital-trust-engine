from fastapi import APIRouter, UploadFile, File, Depends
from app.services import inference, storage
from app.schemas import ForensicScore
from app.auth import verify_token
import uuid

router = APIRouter(prefix="/forensics", tags=["forensics"])

@router.post("/score", response_model=ForensicScore)
async def get_score(video: UploadFile = File(...), audio: UploadFile = None, _=Depends(verify_token)):
    vbytes = await video.read()
    modalities = {}
    # call dummy inferences
    face = inference.infer_face_verification(vbytes)
    lip = inference.infer_lip_sync(vbytes) if vbytes else {"lip_sync_score": 0.0}
    rppg = inference.infer_rppg(vbytes)
    multi = inference.detect_multiperson(vbytes)
    modalities["deepfake"] = 1.0 - face["face_match"]
    modalities["lip"] = lip.get("lip_sync_score", 0)
    modalities["rppg"] = rppg.get("rppg_consistency", 0)
    modalities["multi_person"] = multi
    score = inference.forensic_score_multi(modalities)
    # save evidence file
    evref = storage.save_evidence_file(vbytes, ext=".mp4")
    score["evidence_refs"].append(evref)
    return ForensicScore(**score)
