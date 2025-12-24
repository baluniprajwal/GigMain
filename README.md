# gigw-main

Full-stack app with a React + Vite frontend and an Express + MongoDB backend.

## Prerequisites
- Node.js 18+ (20+ recommended)
- MongoDB connection string

## Setup
1. Install backend dependencies:
   ```powershell
   cd backend
   npm install
   ```
2. Install frontend dependencies:
   ```powershell
   cd ..\frontend
   npm install
   ```
3. Create `backend/.env`:
   ```env
   PORT=3000
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   ```
4. Create `frontend/.env`:
   ```env
   VITE_API_BASE_URL=http://localhost:3000
   ```

## Run the app
1. Start the backend (from `backend`):
   ```powershell
   npm run dev
   ```
2. Start the frontend (from `frontend`):
   ```powershell
   npm run dev
   ```
3. Open the app at `http://localhost:5173`.

## API
The backend exposes auth routes under `/api/auth`:
- `POST /api/auth/signup`
- `POST /api/auth/login`

## Notes
- The frontend reads `VITE_API_BASE_URL` from `frontend/.env` or your deployment environment.
- The API path `/api/auth` is appended in `frontend/src/api/axios.js`.
