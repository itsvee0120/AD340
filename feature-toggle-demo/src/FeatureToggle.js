// src/FeatureToggle.js
import React from "react";
import "./App.css"; // Use styles from App.css

const FeatureToggle = ({ isEnabled, featureName }) => {
  return (
    <div className={`feature-toggle ${isEnabled ? "enabled" : "disabled"}`}>
      {isEnabled
        ? `${featureName} is enabled`
        : `Feature ${featureName} is disabled`}
    </div>
  );
};

export default FeatureToggle;
