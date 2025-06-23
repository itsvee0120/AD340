// services/api.js
import axios from "axios";

// Change this to your computer's IP address when testing on physical device
// To find your IP: ipconfig (Windows) or ifconfig (Mac/Linux)
const BASE_URL = "http://localhost:3000"; // For simulator
// const BASE_URL = 'http://192.168.1.100:3000'; // For physical device

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor for debugging
api.interceptors.request.use((request) => {
  console.log("Starting Request:", request.method?.toUpperCase(), request.url);
  console.log("Request data:", request.data);
  return request;
});

// Add response interceptor for debugging
api.interceptors.response.use(
  (response) => {
    console.log("Response received:", response.status, response.data);
    return response;
  },
  (error) => {
    console.error("API Error:", error.message);
    if (error.response) {
      console.error(
        "Error response:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.error("No response received:", error.request);
    }
    return Promise.reject(error);
  }
);

export const tasksApi = {
  // Get all tasks
  getTasks: () => api.get("/tasks"),

  // Get single task
  getTask: (id) => api.get(`/tasks/${id}`),

  // Create new task
  createTask: (taskData) => api.post("/tasks", taskData),

  // Update task
  updateTask: (id, taskData) => api.patch(`/tasks/${id}`, taskData),

  // Delete task
  deleteTask: (id) => api.delete(`/tasks/${id}`),
};

export default api;
