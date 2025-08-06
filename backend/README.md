# Backend

Flask API for ParTee. Provides authentication, player matching, and chat endpoints.

## Setup

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
flask run
```

Copy the root `.env.example` to `.env` and provide your MySQL connection
details. The application reads the following variables:

```
DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, JWT_SECRET_KEY
```

Alternatively, you may supply `DATABASE_URL` to override the constructed
connection string.
