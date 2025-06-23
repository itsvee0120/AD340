# ShoppingListWithImmer

A simple and interactive shopping list application built with React and Immer. This app allows users to add, edit, and remove shopping list items. It utilizes the `use-immer` hook to manage immutable state updates in a simple and intuitive way.

## Features

- **Add Items**: Users can add items to the shopping list with details such as name, quantity, category, and notes.
- **Edit Items**: Users can edit existing items in the shopping list.
- **Remove Items**: Users can remove items from the shopping list.
- **State Management**: State updates are handled immutably using Immer to ensure efficient updates without mutating the original state.

## Prerequisites

- Node.js (>=14.x)
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/itsvee0120/AD320.git
   cd shopping-list-with-immer
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or if you use yarn
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or if you use yarn
   yarn start
   ```

4. Open your browser and visit `http://localhost:3000` to see the shopping list application in action.

## Usage

1. **Adding Items**: To add an item to the list, enter the item name, quantity, category, and optional notes, then click the "Add Item" button.
2. **Editing Items**: To edit an item, click the "Edit" button next to the item. The input fields will populate with the item's current details. After editing, click the "Update Item" button to save the changes.
3. **Removing Items**: To remove an item from the list, click the "Remove" button next to the item.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Immer**: A package for working with immutable data structures in a simpler way, used for state management in this app.

## Example

```jsx
import React from "react";
import ShoppingListWithImmer from "./ShoppingListWithImmer";

function App() {
  return (
    <div className="App">
      <ShoppingListWithImmer />
    </div>
  );
}

export default App;
```
