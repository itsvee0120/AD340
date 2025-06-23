# Task Manager App

A React Native task manager app with a Node.js backend API.
Supports creating, reading, updating, and deleting (CRUD) tasks.

## Features

- View all tasks
- Add new tasks
- Edit existing tasks
- Delete tasks with confirmation
- Mark tasks as complete/incomplete
- Uses React Query for data fetching and mutation
- Backend API built with Node.js and NestJS

## Tech Stack

- **Frontend:** React Native, React Query, Axios
- **Backend:** Node.js, NestJS (or your chosen backend framework)
- **API:** RESTful endpoints

## Setup & Run

### Backend

1. Clone the backend repo or use your existing backend.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the backend server:

   ```bash
   npm run start
   ```

4. Make sure your backend runs on a reachable IP and port .

### Frontend (React Native)

1. Clone the frontend repo or use your existing project.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Update the backend API base URL in `services/api.js` to your backend IP address.
4. Run the React Native app:

   ```bash
   npm run android
   # or
   npm run ios
   ```

5. Use the app to manage your tasks!

## Notes

- If testing on a physical device, ensure your computer and device are on the same network.
- Adjust the API base URL accordingly in `services/api.js`.
- React Query handles data caching and synchronization.
- API logs requests and responses to help with debugging.

## Troubleshooting

- If tasks don’t load or you get connection errors, check your backend is running and the IP address is correct.
- Use React Native Debugger or network inspector to monitor API calls.
- For backend errors, check backend console logs.
