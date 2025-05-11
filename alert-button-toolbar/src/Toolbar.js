// src/Toolbar.js

import React from "react";
import AlertButton from "./AlertButton";

const Toolbar = () => {
  return (
    <div>
      <AlertButton message="Hello, this is button 1!" children="Button 1" />
      <AlertButton
        message="This is a different message for button 2."
        children="Button 2"
      />
      <AlertButton
        message="Final button with a unique message."
        children="Button 3"
      />
    </div>
  );
};

export default Toolbar;
