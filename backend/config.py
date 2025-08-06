import os
from dotenv import load_dotenv

# Load environment variables from .env if present
load_dotenv()


class Config:
    """Application configuration loaded from environment variables."""

    # Database settings
    DB_USER = os.getenv("DB_USER", "partie")
    DB_PASSWORD = os.getenv("DB_PASSWORD", "partie")
    DB_HOST = os.getenv("DB_HOST", "localhost")
    DB_PORT = os.getenv("DB_PORT", "3306")
    DB_NAME = os.getenv("DB_NAME", "partie")

    # Allow overriding the full connection URL if provided
    SQLALCHEMY_DATABASE_URI = os.getenv(
        "DATABASE_URL",
        f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}",
    )

    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "dev")
