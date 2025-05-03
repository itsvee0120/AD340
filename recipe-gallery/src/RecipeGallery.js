import React from "react";
import "./RecipeGallery.css";

// Recipe data array
const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"],
    image: "carbonara.jpg", // Image file in public/images folder
  },
  {
    id: 2,
    title: "Margherita Pizza",
    ingredients: ["Dough", "Tomato Sauce", "Mozzarella", "Basil"],
    image: "margherita.jpg", // Image file in public/images folder
  },
  {
    id: 3,
    title: "Caesar Salad",
    ingredients: ["Lettuce", "Croutons", "Parmesan", "Caesar Dressing"],
    image: "caesar.jpg", // Image file in public/images folder
  },
];

const RecipeGallery = () => {
  return (
    <div className="gallery-container">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <img
            src={`/images/${recipe.image}`} // Correctly referencing images in public folder
            alt={recipe.title}
            className="recipe-image"
          />
          <h2 className="recipe-title">{recipe.title}</h2>
          <h3>Ingredients:</h3>
          <ul className="recipe-ingredients">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RecipeGallery;
