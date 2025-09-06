# Hospital Management System — Full Project (Backend + Frontend)

This file contains a runnable scaffold for a Hospital Management System using:

- Backend: Node.js (Express), MySQL
- Frontend: React (create-react-app scaffold style), Bootstrap
- Auth: JWT + bcrypt (backend). Frontend stores token in localStorage for simplicity.

## What is included

- backend/ — Express API server with auth and appointment endpoints
- frontend/ — Minimal React app with Login and Dashboard
- sql/schema.sql — Database schema for MySQL
- .env.example (backend) — environment variables example

## How to run locally

1. Start MySQL and create the database/tables:
   ```bash
   mysql -u root -p < backend/sql/schema.sql
   ```

2. Configure backend `.env`:
   ```bash
   cp backend/.env.example backend/.env
   # Edit backend/.env with your DB credentials and JWT secret
   ```

3. Install and run backend:
   ```bash
   cd backend
   npm install
   npm run dev
   ```

4. Install and run frontend:
   ```bash
   cd frontend
   npm install
   npm start
   ```

Open the frontend at http://localhost:3000 and the backend at http://localhost:4000.

