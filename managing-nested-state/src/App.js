import React, { useState } from "react";
import UserProfile from "./UserProfile";

const App = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Welcome to the User Profile App</h1>
      <UserProfile />
    </div>
  );
};

export default App;
