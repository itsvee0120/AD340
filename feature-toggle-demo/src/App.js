// src/App.js
import React from "react";
import FeatureToggle from "./FeatureToggle";

const App = () => {
  return (
    <div>
      <h1>Feature Toggles</h1>
      <FeatureToggle isEnabled={true} featureName="Dark Mode" />
      <FeatureToggle isEnabled={false} featureName="Beta Dashboard" />
      <FeatureToggle isEnabled={true} featureName="Live Chat" />
      <FeatureToggle isEnabled={false} featureName="New UI" />
    </div>
  );
};

export default App;
