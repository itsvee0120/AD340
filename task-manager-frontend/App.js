// App.js
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TaskManager from "./components/TaskManager";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TaskManager />
    </QueryClientProvider>
  );
}
