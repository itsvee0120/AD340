# Task Manager Backend

This is the backend API for the Task Manager app, built with **NestJS**.

## Features

- Create, read, update, and delete (CRUD) tasks
- RESTful API endpoints
- Uses an in-memory or simple file-based database (adjust based on your setup)

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to this folder:

   ```bash
   cd task-manager-backend

   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm run start:dev
   ```

   The server will start on `http://localhost:3000` (or your configured IP/port).

### API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/tasks`     | Get all tasks     |
| GET    | `/tasks/:id` | Get task by ID    |
| POST   | `/tasks`     | Create a new task |
| PATCH  | `/tasks/:id` | Update task by ID |
| DELETE | `/tasks/:id` | Delete task by ID |

### Notes

- Make sure to update the frontend API base URL to match the backend server IP address.
- This backend is built with NestJS and uses TypeScript.
