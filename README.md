# ParTee

Starter project for the ParTee mobile app.

## Structure

- `backend/` – Flask API
- `frontend/` – React Native app (Expo)
- `docker-compose.yml` – development stack with MySQL and backend

## Getting Started

### Backend & Database

```bash
docker-compose up --build
```

The API will be available at http://localhost:5000.

### Frontend

```bash
cd frontend
npm install
npm start
```

Use the Expo Go app or an emulator to run the frontend.
