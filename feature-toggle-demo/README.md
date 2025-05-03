# Feature Toggle App

## Description

This is a simple React application that demonstrates feature toggling using a functional component. The `FeatureToggle` component conditionally renders a feature name based on whether it is enabled or disabled.

## Project Structure

```
/src
│── App.js
│── FeatureToggle.js
│── index.js
│── App.css
│── index.css
└── README.md
```

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/feature-toggle-app.git
   ```
2. Navigate to the project folder:
   ```sh
   cd feature-toggle-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Usage

- The `FeatureToggle` component accepts two props:
  - `isEnabled` (boolean): Determines if the feature is enabled or disabled.
  - `featureName` (string): The name of the feature.
- Example usage in `App.js`:
  ```jsx
  <FeatureToggle isEnabled={true} featureName="Dark Mode" />
  <FeatureToggle isEnabled={false} featureName="Beta Dashboard" />
  ```

## Styling

- Features are styled using `App.css`:
  - **Enabled** features have a green background.
  - **Disabled** features have a red background.

## License

This project is licensed under the MIT License.
