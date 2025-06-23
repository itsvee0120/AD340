// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Use 'react-dom/client' for React 18 and onwards
import "./index.css"; // Optionally import global styles
import App from "./App"; // Import the main App component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
