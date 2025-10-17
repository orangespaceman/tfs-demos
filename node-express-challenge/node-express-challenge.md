# Node.js / Express Challenge

## Part 1 - project setup

Build an Express API that reads from and writes to an existing database

### Task 1 - initialise the project

Requirements

- Create a new Node project with `npm init -y`
- Use ES modules by setting `"type": "module"` in `package.json`
- Add scripts
  ```json
  {
    "scripts": {
      "start": "node server.js",
      "dev": "nodemon server.js",
      "lint": "eslint ."
    }
  }
  ```
- Install the minimum you need to run an API
  - `express`
  - A database client that matches your database (for example `pg` or `mysql2`)
  - `dotenv` for environment variables
  - `cors` if a browser client will call the API
  - `nodemon` as a dev dependency

Create a sensible repository with `package.json`, `.gitignore`, and a basic folder structure such as
  ```
  src/
    server.js
    routes/
    controllers/
    db/
    middleware/
    utils/
  ```

---

## Part 2 - environment configuration

### Task 2 - .env and configuration
Requirements
- Create a `.env` file with at least
  ```
  PORT=4000
  DATABASE_URL=postgres://user:pass@localhost:5432/dbname
  ```
- Load variables with `dotenv` at app start
- Do not commit real secrets. Provide `.env.example` with dummy values

Acceptance
- App boots using `PORT` from the environment
- Database connection string is read from `DATABASE_URL`

---

## Part 3 - first endpoint and app middleware

### Task 3 - add an app endpoint

Requirements

- Add `GET /test` (or similar) that returns
  - `200 OK`
  - JSON with `{"lorem": "ipsum"}` or similar
  - Request this endpoint in a browser just to check that the API is working

### Task 4 - baseline middleware

Requirements

- `express.json()` to parse JSON bodies
- CORS configured so you can call the API from a browser app
- A catch-all 404 handler for unknown routes

Acceptance
- Unknown routes return a JSON 404 with a clear message

---

## Part 4 - database access

### Task 5 - connection and simple query

Requirements

- Connect to the database from Node.js
- Prove connectivity with a simple query such as `SELECT * from [table name]`

Acceptance
- Server logs a clear message on successful connection
- Server fails if the database is unreachable

---

## Part 5 - implement the API

Use your Database and API design (from those challenges)

### Task 6 - read endpoints

Requirements

- Implement list and get by id endpoints for at least one resource in your schema

### Task 7 - write endpoints

Requirements

- Implement create and update for the same resource
- On create return `201 Created`
- Use `PATCH` for partial updates, `PUT` only if replacing the full record
- Implement delete if the design includes it and return `204 No Content` on success

---

## Stretch goals

- With the GET endpoints, support basic filtering and sorting using query parameters if the design calls for it
- Add pagination using `page` and `per_page` or the agreed alternative
- Validate path parameters, query parameters, and request bodies
- On validation failure return `422 Unprocessable Entity` with field level errors
- Use `404 Not Found` when a record is missing
- Add an error handling middleware at the end of the stack that converts thrown errors and rejected promises into a JSON response with an appropriate status code
- Ensure unhandled errors do not crash the process
