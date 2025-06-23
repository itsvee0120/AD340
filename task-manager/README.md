# Task Manager React App

A simple task manager app built using React. This app allows users to add new tasks, mark them as completed, and toggle their completion status. It demonstrates basic React state management and the use of hooks like `useState`.

## Features

- **Add Tasks**: Add a new task by typing in a title and clicking the "Add Task" button.
- **Mark Tasks as Completed**: Toggle the completion status of tasks by clicking the "Mark Complete" button.
- **Clear Input After Adding Task**: The input field clears automatically after adding a task.
- **Task Completion Styling**: Completed tasks are visually crossed out.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/itsvee0120/AD320.git
   ```

2. Navigate to the project directory:

   ```bash
   cd task-manager
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The app will run on [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/`
  - `TaskManager.js` - The main component managing tasks and user input.
  - `TaskManager.css` - The CSS file for styling the task manager app.
  - `App.js` - Main entry point of the React app, where `TaskManager` is used.
- `public/`
  - `index.html` - HTML template used by React to render the app.

## Usage

- Type a task title in the input field.
- Click **"Add Task"** to add it to the list.
- Click **"Mark Complete"** to toggle a task's completion status. Tasks marked as complete will be visually crossed out.
