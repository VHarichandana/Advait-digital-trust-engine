from pydantic import BaseSettings

class Settings(BaseSettings):
    SECRET_KEY: str = "supersecretkey"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    DATABASE_URL: str = "sqlite+aiosqlite:///./advait.db"
    RATE_LIMIT: int = 100

    class Config:
        env_file = ".env"

settings = Settings()

