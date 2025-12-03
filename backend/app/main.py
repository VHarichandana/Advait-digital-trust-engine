from fastapi import FastAPI
from app.routers import auth_routes, forensics_routes, polygraph_routes, pairing_routes, room_routes, sync_routes, dashboard_routes
from app.db import init_db
from app.middleware import SimpleRateLimiter
from app.config import settings
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("advait")

app = FastAPI(title="ADAVIT Backend", version="0.1.0")

# Initialize DB
init_db()

# include middlewares
app.add_middleware(SimpleRateLimiter, limit=settings.RATE_LIMIT)

# include routers
app.include_router(auth_routes.router)
app.include_router(forensics_routes.router)
app.include_router(polygraph_routes.router)
app.include_router(pairing_routes.router)
app.include_router(room_routes.router)
app.include_router(sync_routes.router)
app.include_router(dashboard_routes.router)

@app.get("/")
async def root():
    return {"service": "ADAVIT Backend", "status": "ok"}
