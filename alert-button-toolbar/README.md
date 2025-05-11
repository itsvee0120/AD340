# Alert Button Toolbar

This is a simple React application that demonstrates the use of props and event handling in React. It features a `Toolbar` component containing multiple `AlertButton` components. Each button displays a unique alert message when clicked.

## Features

- **`AlertButton`**: Displays a button that shows an alert with a specific message when clicked.
- **`Toolbar`**: Contains multiple `AlertButton` components with different messages.

## Technologies Used

- React
- JavaScript (ES6+)
- CSS

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/itsvee0120/AD320.git
   ```

2. Navigate to the project directory:

   ```bash
   cd alert-button-toolbar
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   This will open the app in your default browser.

## How It Works

1. The `AlertButton` component accepts two props:

   - `message`: The content that will be displayed in the alert when the button is clicked.
   - `children`: The text displayed on the button.

2. The `Toolbar` component renders multiple `AlertButton` components with different messages and button texts.

3. Clicking each button in the toolbar triggers an alert with the corresponding `message` passed via the props.

## Example Usage

The following code demonstrates how the `AlertButton` and `Toolbar` components work:

```jsx
// Example of Toolbar component
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
```

## Customization

- You can easily add more buttons by adding more `AlertButton` components within the `Toolbar` component, and passing different `message` and `children` props for each.
- Feel free to modify the CSS to suit your styling preferences.

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more information.
