# Backend

Flask API for ParTee. Provides authentication, player matching, and chat endpoints.

## Setup

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
flask run
```

The application expects a MySQL database. Configure the connection string with the `DATABASE_URL` environment variable.
Example: `mysql+pymysql://user:password@localhost/partie`
