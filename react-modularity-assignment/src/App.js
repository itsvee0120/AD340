import React from "react";
import "./App.css";

// default imports
import Header from "./components/Header";
import Footer from "./components/Footer";

// named imports
import { ContentA } from "./components/ContentA";
import { ContentB } from "./components/ContentB";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <ContentA />
        <ContentB />
      </main>
      <Footer />
    </>
  );
}

export default App;
