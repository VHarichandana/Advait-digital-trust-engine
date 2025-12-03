from fastapi import Request, HTTPException
from starlette.middleware.base import BaseHTTPMiddleware
import time

class SimpleRateLimiter(BaseHTTPMiddleware):
    def __init__(self, app, limit=100):
        super().__init__(app)
        self.limit = limit
        self.clients = {}

    async def dispatch(self, request: Request, call_next):
        ip = request.client.host if request.client else "unknown"
        now = int(time.time())
        window = now // 60  # per-minute window
        key = f"{ip}:{window}"
        self.clients.setdefault(key, 0)
        self.clients[key] += 1
        if self.clients[key] > self.limit:
            raise HTTPException(status_code=429, detail="Too many requests")
        response = await call_next(request)
        return response
