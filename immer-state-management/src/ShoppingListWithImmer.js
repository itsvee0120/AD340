import React, { useState } from "react";
import { useImmer } from "use-immer";
import "./ShoppingListWithImmer.css";

const ShoppingListWithImmer = () => {
  const [shoppingList, updateShoppingList] = useImmer([
    {
      id: 1,
      name: "Apples",
      quantity: 2,
      details: { category: "Fruit", notes: "Buy green apples" },
    },
    {
      id: 2,
      name: "Bread",
      quantity: 1,
      details: { category: "Bakery", notes: "" },
    },
  ]);

  const [newItem, setNewItem] = useState({
    name: "",
    quantity: 1,
    category: "Misc",
    notes: "",
  });

  const [editingItem, setEditingItem] = useState(null); // Track the item being edited

  // Add item to the shopping list
  const addItem = () => {
    if (!newItem.name.trim()) return;

    const newItemData = {
      id: shoppingList.length + 1,
      name: newItem.name,
      quantity: newItem.quantity,
      details: { category: newItem.category, notes: newItem.notes },
    };

    updateShoppingList((draft) => {
      draft.push(newItemData);
    });

    setNewItem({ name: "", quantity: 1, category: "Misc", notes: "" });
  };

  // Update an existing item in the shopping list
  const updateItem = (id, updatedItem) => {
    updateShoppingList((draft) => {
      const item = draft.find((item) => item.id === id);
      if (item) {
        item.name = updatedItem.name;
        item.quantity = updatedItem.quantity;
        item.details = {
          category: updatedItem.category,
          notes: updatedItem.notes,
        };
      }
    });

    // Clear the editing state after update
    setEditingItem(null);
    setNewItem({ name: "", quantity: 1, category: "Misc", notes: "" });
  };

  // Remove an item from the shopping list
  const removeItem = (id) => {
    updateShoppingList((draft) => {
      const index = draft.findIndex((item) => item.id === id);
      if (index !== -1) {
        draft.splice(index, 1); // Remove item
      }
    });
  };

  // Start editing an item
  const startEditing = (item) => {
    setEditingItem(item);
    setNewItem({
      name: item.name,
      quantity: item.quantity,
      category: item.details.category,
      notes: item.details.notes,
    });
  };

  return (
    <div className="shopping-list-container">
      <h1>Shopping List</h1>

      <div className="add-item-form">
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) =>
            setNewItem({ ...newItem, quantity: parseInt(e.target.value) })
          }
        />
        <select
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
        >
          <option value="Misc">Misc</option>
          <option value="Fruit">Fruit</option>
          <option value="Bakery">Bakery</option>
          <option value="Dairy">Dairy</option>
          <option value="Vegetable">Vegetable</option>
        </select>
        <input
          type="text"
          placeholder="Notes"
          value={newItem.notes}
          onChange={(e) => setNewItem({ ...newItem, notes: e.target.value })}
        />
        <button
          onClick={
            () =>
              editingItem
                ? updateItem(editingItem.id, newItem) // Update if in editing mode
                : addItem() // Add if not editing
          }
        >
          {editingItem ? "Update Item" : "Add Item"}
        </button>
      </div>

      <ul className="shopping-list">
        {shoppingList.map((item) => (
          <li key={item.id} className="shopping-list-item">
            {item.name} (Qty: {item.quantity}) - {item.details.category}
            {item.details.notes && ` - Notes: ${item.details.notes}`}
            <button onClick={() => removeItem(item.id)}>Remove</button>
            <button onClick={() => startEditing(item)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingListWithImmer;
