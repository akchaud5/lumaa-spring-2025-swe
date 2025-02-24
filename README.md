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

# Backend setup:

     PORT=5000
     DATABASE_URL=postgresql://postgres:password@localhost:5432/taskdb
     DB_USER=postgres
     DB_PASS=password
     DB_HOST=localhost
     DB_PORT=5432
     DB_NAME=taskdb
     JWT_SECRET=f8e6b2f75e0a3c7f3b52a9d48980e4b89bfa8cb118a2f7b5632f3f3d3ef6a2d8


npm run dev

# Frontend setup:

bashCopycd frontend
npm install
# Create .env file with:
REACT_APP_API_URL=http://localhost:3001/api

npm start

# Database setup:

sqlCopyCREATE DATABASE task_management;
Tables will be created automatically on first run.
API Endpoints
Auth

POST /api/auth/register - Register user
POST /api/auth/login - Login user

# Tasks (Protected)

GET /api/tasks - Get all tasks
POST /api/tasks - Create task
PUT /api/tasks/:id - Update task
DELETE /api/tasks/:id - Delete task

# Features

JWT authentication
CRUD operations for tasks
PostgreSQL database
React frontend with TypeScript
Protected routes
Password hashing with bcrypt

# Security

Password hashing
JWT authentication
Protected API routes
Input validation
CORS enabled
