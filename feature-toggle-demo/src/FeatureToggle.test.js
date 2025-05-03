// src/FeatureToggle.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FeatureToggle from "./FeatureToggle";

describe("FeatureToggle Component", () => {
  test("renders enabled feature correctly", () => {
    render(<FeatureToggle isEnabled={true} featureName="Dark Mode" />);
    expect(screen.getByText("Dark Mode is enabled")).toBeInTheDocument();
  });

  test("renders disabled feature correctly", () => {
    render(<FeatureToggle isEnabled={false} featureName="Live Chat" />);
    expect(
      screen.getByText("Feature Live Chat is disabled")
    ).toBeInTheDocument();
  });
});
