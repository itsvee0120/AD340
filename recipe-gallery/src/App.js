import React from "react";
import RecipeGallery from "./RecipeGallery"; // Import the RecipeGallery component
import "./App.css"; // Import global styles

const App = () => {
  return (
    <div className="App">
      <h1>Recipe Gallery</h1>
      <RecipeGallery /> {/* Render the RecipeGallery component */}
    </div>
  );
};

export default App;
