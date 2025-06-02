import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DogFacts from "./DogFacts";
import DogGroups from "./DogGroups";
import "./App.css"; // Import the CSS file

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Dog API Explorer</h1>
        <div className="main-container">
          <DogGroups />
          <DogFacts />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
