
## Overview

# Task Management Application

Full-stack task management application with React, TypeScript, Node.js, and PostgreSQL.

## Setup Requirements

- Node.js (v18+)
- PostgreSQL (v14+)
- npm/yarn

## Installation

1. Clone repository and install dependencies:
```bash
git clone <repository-url>
cd task-management
### 1. Backend (Node.js)
  - Document any environment variables (e.g., database connection string, JWT secret)  
     **.env file in server folder will have the required details for database connection string and JWT Secret**  
    ```env
         PORT=5000
         DATABASE_URL=postgresql://postgres:password@localhost:5432/taskdb
         DB_USER=postgres
         DB_PASS=password
         DB_HOST=localhost
         DB_PORT=5432
         DB_NAME=taskdb
         JWT_SECRET=f8e6b2f75e0a3c7f3b52a9d48980e4b89bfa8cb118a2f7b5632f3f3d3ef6a2d8


### 2. Frontend (React + TypeScript)

- **Login / Register**:
  - If not authenticated, the user should not see the tasks page.
---

## Deliverables
1. **Implement Your Solution** in the forked repository. Make sure you're README file has:
   - Steps to set up the database.  
     - **Install Postgres from https://www.postgresql.org/download/.**    
     - **Open the pgAdmin Tool to create a database named taskdb**  
     - **The creation of tables is taken care by the DB script so the setup for database is done**
     
   - How to run the backend.  
     - **Install Node**    
     - **npm install**  
     - **npm run dev**  
     - **This should start up the backend on port 3000**  
     - **Backend Configuration is done**  
     
   - How to run the frontend.  
   - **npm install**
   - **npm run dev**
   - **This should provide a link for the application** 

## Evaluation Criteria

1. **Functionality**  
   - Does registration and login work correctly (with password hashing)? **YES**
   - Are tasks protected by authentication? **YES**
   - Does the tasks CRUD flow work end-to-end? **YES**

2. **Code Quality**  
   - Is the code structured logically and typed in TypeScript? **YES**
   - Are variable/function names descriptive? **YES**

3. **Clarity**  
   - Is the `README.md` (in your fork) clear and detailed about setup steps? **YES**
   - Easy to run and test? **YES**

4. **Maintainability**  
   - Organized logic (controllers/services, etc.) **YES**
   - Minimal hard-coded values **No hard-coded values except JWT**
