import React from "react";
import UserProfile from "./UserProfile";
import "./App.css";
import VioletImage from "./assets/Violet.jpeg";

function App() {
  return (
    <div className="App">
      <UserProfile
        name="Jane Doe"
        email="jane.doe@example.com"
        photoUrl={VioletImage}
      />
    </div>
  );
}

export default App;
