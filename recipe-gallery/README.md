## **Recipe Gallery**

### **Objective**

Develop a Recipe Gallery using React to display a curated list of recipes, focusing on rendering static data. This assignment emphasizes understanding list rendering in React without involving state management or interactivity.

### **Setup & Run**

1. Clone the repository:
   ```bash
   git clone https://github.com/itsvee0120/AD320.git
   cd recipe_gallery
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open `http://localhost:3000` in your browser to view the recipe gallery.

### **Project Structure**

- **`src/index.js`**: Entry point that renders the `RecipeGallery` component.
- **`src/RecipeGallery.js`**: Main component responsible for rendering recipe cards.
- **`src/recipes.js`**: Contains an array of static recipe data.
- **`src/RecipeGallery.css`**: Stylesheet for layout and design.

### **Layout & Styling Choices**

- Uses **Flexbox** for responsive layout.
- Each recipe is displayed as a **card** with an image, title, and ingredients list.
- A **grid-like structure** is used for a visually appealing gallery.
- Cards have **subtle shadows and borders** for better aesthetics.
- **Mobile-friendly** design ensures usability on different screen sizes.

### **Technologies Used**

- **React** for UI rendering.
- **JavaScript (ES6+)** for functionality.
- **CSS (Flexbox)** for styling and layout.
