# Alert Button Dynamic

This is a simple React application that demonstrates dynamic rendering of buttons and the use of props and event handling in React. It features a `Toolbar` component that dynamically renders `AlertButton` components based on an array of button properties. Each button displays a unique alert message when clicked.

## Features

- **Dynamic Button Creation**: The `Toolbar` component renders buttons based on an array of button properties (message and children).
- **Customizable Alert Messages**: Each `AlertButton` displays an alert with a custom message when clicked.
- **Versatile Button Text**: The button text is dynamically set using the `children` prop.

## Technologies Used

- React
- JavaScript (ES6+)
- CSS

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/itsvee0120/AD320.git
   ```

2. Navigate to the project directory:

   ```bash
   cd alert-buttons-dynamic
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   This will open the app in your default browser.

## How It Works

- The `AlertButton` component accepts two props:
  - `message`: The content that will be displayed in the alert when the button is clicked.
  - `children`: The text displayed on the button.
- The `Toolbar` component contains an array of button objects, each with a `message` and `children` property.
- The `.map()` function is used to render an `AlertButton` for each item in the array, passing the appropriate props.

## Example Button Properties Array

```jsx
const buttons = [
  { message: "Downloading!", children: "Download File" },
  { message: "Sharing!", children: "Share Document" },
  { message: "Uploading!", children: "Upload File" },
  { message: "Saving!", children: "Save Changes" },
];
```

### Example of Toolbar Component

```jsx
// src/Toolbar.js
import React from "react";
import AlertButton from "./AlertButton";

const Toolbar = () => {
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
```

## Customization

- To add more buttons, simply modify the `buttons` array in the `Toolbar` component by adding new objects with `message` and `children` properties.
- You can also customize the styling by modifying the `App.css` file.

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more information.
