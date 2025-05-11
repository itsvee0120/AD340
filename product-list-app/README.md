# 🛍️ Static Product List - React App

This is a simple React application that displays a static list of products using the `map()` function. It demonstrates basic React component usage, JSX rendering, and clean CSS styling — without any state management.

---

## 🚀 How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/product-list-app.git
cd product-list-app
```

> If you already have the code locally, navigate to the root folder:

```bash
cd path/to/product-list-app
```

### 2. Install Dependencies

Make sure you have Node.js installed. Then run:

```bash
npm install
```

### 3. Start the App

```bash
npm start
```

The app should automatically open at:
👉 `http://localhost:3000`

---

## 📁 Project Structure

```
src/
├── components/
│   └── ProductList.js        # Component rendering the list
│   └── ProductList.css       # Styling for the product list
├── data/
│   └── products.js           # Static product array
├── App.js                    # Main app component
├── index.js                  # Entry point
```

---

## 💡 Styling Notes

- Clean card-style layout for each product.
- CSS styles applied via a separate `ProductList.css` file.
- No external libraries for styling — everything is done using plain CSS.

---

## 📦 Example Product

```js
{
  id: 1,
  name: "Laptop",
  description: "High-performance laptop for professionals.",
  price: 1200
}
```

---
