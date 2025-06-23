// src/App.js
import React from "react";
import ShoppingListWithImmer from "./ShoppingListWithImmer"; // Import the component
import "./App.css"; // Optionally import styles if you have them

function App() {
  return (
    <div className="App">
      <h1>Shopping List App</h1>
      <ShoppingListWithImmer />{" "}
      {/* Render the ShoppingListWithImmer component */}
    </div>
  );
}

export default App;
