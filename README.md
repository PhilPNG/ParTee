# ParTee

Starter project for the ParTee mobile app.

## Structure

- `backend/` – Flask API
- `frontend/` – React Native app (Expo)

## Getting Started

### Backend & Database

1. Copy `.env.example` to `.env` and update the MySQL connection settings.
2. Create a virtual environment and install dependencies:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
flask run
```

The API will be available at http://localhost:5000.

### Frontend

```bash
cd frontend
npm install
npm start
```

Use the Expo Go app or an emulator to run the frontend.
