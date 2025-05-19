# React Counter App

This is a simple React application that demonstrates state management, asynchronous state updates, and how React handles state as a snapshot. It includes a `Counter` component that allows users to interact with state through various buttons.

## Features

- **Increment**: Increases the count by 1 immediately when clicked.
- **Increment After Delay**: Increases the count by 1 after a 2-second delay.
- **Increment Twice**: Demonstrates React's state batching behavior by attempting to increment the count by 2 (only 1 increment will happen due to React's batching).
- **Correct Increment Twice**: Correctly increments the count by 2 using a state updater function, handling multiple state updates in quick succession.

## Requirements

- Node.js (v14 or later)
- npm (Node Package Manager)

## Setup and Installation

To get started with this project, follow the instructions below:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/counter-app.git
   cd counter-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```

4. Open the browser and visit `http://localhost:3000` to view the app.

## Technologies Used

- React (v18)
- CSS (for basic styling)
- React Hooks (`useState`)

## Experimentation and Observations

- **State Updates**: The app demonstrates how React batches state updates and how the order of updates is handled in cases where multiple state changes are triggered quickly (e.g., the "Increment Twice" button).
- **Asynchronous Updates**: The "Increment After Delay" button shows how asynchronous updates (like using `setTimeout`) can be handled in React.
