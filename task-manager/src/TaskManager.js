import React, { useState } from "react";
import "./TaskManager.css";

function TaskManager() {
  // State initialization
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  // Function to add a new task
  const addTask = () => {
    if (newTaskTitle.trim() === "") return; // Prevent adding empty tasks

    const newTask = {
      id: Date.now(), // Unique id based on timestamp
      title: newTaskTitle, // User-defined task title
      completed: false, // Task is initially not completed
    };

    // Adding the new task to the state immutably
    setTasks([...tasks, newTask]);
    setNewTaskTitle(""); // Clear the input field after adding the task
  };

  // Function to toggle task completion status
  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>

      {/* Input field for task title */}
      <div className="input-container">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Enter a new task"
        />
      </div>

      {/* Centered "Add Task" button */}
      <div className="add-task-button-container">
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Render the list of tasks */}
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span
              className={`task-title ${task.completed ? "completed" : ""}`}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
