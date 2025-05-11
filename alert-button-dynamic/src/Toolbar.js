// src/Toolbar.js

import React from "react";
import AlertButton from "./AlertButton";

const Toolbar = () => {
  // Array of button properties
  const buttons = [
    { message: "Downloading!", children: "Download File" },
    { message: "Sharing!", children: "Share Document" },
    { message: "Uploading!", children: "Upload File" },
    { message: "Saving!", children: "Save Changes" },
  ];

  return (
    <div>
      {buttons.map((button, index) => (
        <AlertButton
          key={index}
          message={button.message}
          children={button.children}
        />
      ))}
    </div>
  );
};

export default Toolbar;
