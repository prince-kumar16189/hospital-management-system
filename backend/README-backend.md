# Backend (Express + MySQL)

## Steps to run

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Create MySQL database and tables:
   - Create a database named `hospital` or run the SQL file:
   ```bash
   mysql -u root -p < sql/schema.sql
   ```
   - Alternatively, run queries from `sql/schema.sql` in your MySQL client.

3. Copy `.env.example` to `.env` and update values.

4. Start server:
   ```bash
   npm run dev
   ```
   The server will run at `http://localhost:4000` by default.
