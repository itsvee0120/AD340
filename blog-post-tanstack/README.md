# React Native CRUD App with TanStack Query

This is a React Native (Expo) app that demonstrates CRUD (Create, Read, Update, Delete) operations using **TanStack Query** (formerly React Query) and **JSONPlaceholder** as a fake REST API.

## Features

- **Fetch Posts**: Fetch and display a list of posts.
- **Create Post**: Add a new post.
- **Edit Post**: Update an existing post.
- **Patch Post**: Update only the title of a post using the `PATCH` method.
- **Delete Post**: Remove a post.
- **Filter Posts by User**: Filter posts by User ID.

## Technologies Used

- **React Native (Expo)**: For building the mobile app.
- **TanStack Query**: For managing server state and API requests.
- **Axios**: For making HTTP requests.
- **Expo Router**: For file-based navigation.
- **JSONPlaceholder**: A fake REST API for testing.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the App

```bash
npx expo start
```

- Scan the QR code with the Expo Go app (Android) or use an emulator (iOS/Android).

## Folder Structure

```
app/
├── (tabs)/               # Tab-based navigation
│   ├── index.js          # Home screen
│   ├── explore.js        # Explore screen
├── posts/                # Posts-related screens
│   ├── index.js          # List posts
│   ├── create.js         # Create a post
│   ├── edit.js           # Edit a post
│   ├── patch.js          # Patch a post
│   ├── filter.js         # Filter posts by User ID
├── _layout.js            # Root layout with QueryClientProvider
```

## Usage

### Fetch Posts

- The **Posts** screen displays a list of posts fetched from the API.

### Create a Post

1. Go to the **Create Post** screen.
2. Enter a title and body.
3. Click **Create Post**.
4. The new post will appear at the top of the list.

### Edit a Post

1. Go to the **Posts** screen.
2. Click **Edit** next to a post.
3. Update the title and body.
4. Click **Update Post**.
5. The post will be updated in the list.

### Patch a Post (Update Title Only)

1. Go to the **Posts** screen.
2. Click **Patch Title** next to a post.
3. Enter a new title.
4. Click **Update Title**.
5. The post title will be updated in the list.

### Delete a Post

1. Go to the **Posts** screen.
2. Click **Delete** next to a post.
3. The post will be removed from the list.

### Filter Posts by User

1. Go to the **Filter Posts by User** screen.
2. Enter a User ID.
3. Click **Filter Posts**.
4. Only posts by the specified User ID will be displayed.

## API Endpoints

- **Fetch Posts**: `GET https://jsonplaceholder.typicode.com/posts`
- **Create Post**: `POST https://jsonplaceholder.typicode.com/posts`
- **Edit Post**: `PUT https://jsonplaceholder.typicode.com/posts/{id}`
- **Patch Post**: `PATCH https://jsonplaceholder.typicode.com/posts/{id}`
- **Delete Post**: `DELETE https://jsonplaceholder.typicode.com/posts/{id}`
- **Filter Posts by User**: `GET https://jsonplaceholder.typicode.com/posts?userId={userId}`

## Dependencies

- `@tanstack/react-query`: For managing server state.
- `axios`: For making HTTP requests.
- `expo-router`: For file-based navigation.
- `react-native`: For building the app.
