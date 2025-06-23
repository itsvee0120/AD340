// components/TaskManager.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { tasksApi } from "../services/api";

const TaskManager = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [deletingTaskId, setDeletingTaskId] = useState(null); // track deleting per task

  const queryClient = useQueryClient();

  // Fetch tasks
  const {
    data: tasks = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      console.log("Fetching tasks...");
      try {
        const response = await tasksApi.getTasks();
        console.log("Tasks fetched successfully:", response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
      }
    },
  });

  // Create task mutation
  const createTaskMutation = useMutation({
    mutationFn: (taskData) => tasksApi.createTask(taskData),
    onSuccess: (response) => {
      console.log("Task created successfully:", response.data);
      queryClient.invalidateQueries(["tasks"]);
      setTitle("");
      setDescription("");
      Alert.alert("Success", "Task created successfully!");
    },
    onError: (error) => {
      console.error("Create task error:", error);
      Alert.alert("Error", `Failed to create task: ${error.message}`);
    },
  });

  // Update task mutation
  const updateTaskMutation = useMutation({
    mutationFn: ({ id, ...data }) => tasksApi.updateTask(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
      setEditingTask(null);
      setTitle("");
      setDescription("");
      Alert.alert("Success", "Task updated successfully!");
    },
    onError: (error) => {
      console.error("Update task error:", error);
      Alert.alert("Error", "Failed to update task");
    },
  });

  // Delete task mutation with per-task loading tracking
  const deleteTaskMutation = useMutation({
    mutationFn: (taskId) => {
      console.log("Calling API to delete task with ID:", taskId);
      return tasksApi.deleteTask(taskId);
    },
    onSuccess: (_, taskId) => {
      console.log("Task deleted successfully:", taskId);
      queryClient.invalidateQueries(["tasks"]);
      Alert.alert("Success", "Task deleted successfully!");
    },
    onError: (error) => {
      console.error("Delete task error:", error);
      Alert.alert("Error", `Failed to delete task: ${error.message}`);
    },
  });

  // Submit handler (create or update)
  const handleSubmit = () => {
    if (!title.trim()) {
      Alert.alert("Error", "Please enter a task title");
      return;
    }

    const taskData = {
      title: title.trim(),
      description: description.trim(),
      completed: false,
    };

    if (editingTask) {
      updateTaskMutation.mutate({ id: editingTask.id, ...taskData });
    } else {
      createTaskMutation.mutate(taskData);
    }
  };

  // Edit handler
  const handleEdit = (task) => {
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description || "");
  };

  // Delete handler with confirmation alert and logs
  const handleDelete = (taskId) => {
    console.log("Directly deleting task ID:", taskId);
    deleteTaskMutation.mutate(taskId);
  };

  // Toggle completion status
  const toggleComplete = (task) => {
    updateTaskMutation.mutate({
      id: task.id,
      completed: !task.completed,
    });
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingTask(null);
    setTitle("");
    setDescription("");
  };

  // Render each task item
  const renderTask = ({ item }) => (
    <View style={styles.taskItem}>
      <TouchableOpacity
        style={styles.taskContent}
        onPress={() => toggleComplete(item)}
      >
        <Text
          style={[styles.taskTitle, item.completed && styles.completedTask]}
        >
          {item.title}
        </Text>
        {item.description && (
          <Text
            style={[
              styles.taskDescription,
              item.completed && styles.completedTask,
            ]}
          >
            {item.description}
          </Text>
        )}
        <Text style={styles.taskStatus}>
          Status: {item.completed ? "✅ Completed" : "⏳ Pending"}
        </Text>
      </TouchableOpacity>

      <View style={styles.taskActions}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleEdit(item)}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDelete(item.id)}
          disabled={deletingTaskId === item.id}
        >
          <Text style={styles.buttonText}>
            {deletingTaskId === item.id ? "Deleting..." : "Delete"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Render error state
  if (error) {
    return (
      <View style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Failed to connect to server. Make sure the backend is running on the
            correct IP and port.
          </Text>
          <TouchableOpacity
            style={styles.retryButton}
            onPress={() => queryClient.invalidateQueries(["tasks"])}
          >
            <Text style={styles.buttonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Main render
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.content}>
        <Text style={styles.header}>My Tasks</Text>

        {/* Form */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Task title"
            value={title}
            onChangeText={setTitle}
          />

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Task description (optional)"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={3}
          />

          <View style={styles.formButtons}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
              disabled={
                createTaskMutation.isLoading || updateTaskMutation.isLoading
              }
            >
              <Text style={styles.buttonText}>
                {editingTask ? "Update Task" : "Add Task"}
              </Text>
            </TouchableOpacity>

            {editingTask && (
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={cancelEdit}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Task list */}
        <Text style={styles.sectionHeader}>Tasks ({tasks.length})</Text>

        {isLoading ? (
          <Text style={styles.loadingText}>Loading tasks...</Text>
        ) : (
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderTask}
            style={styles.taskList}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </ScrollView>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  formButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  submitButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: "#FF6B6B",
    padding: 15,
    borderRadius: 8,
    flex: 1,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  taskList: {
    flex: 1,
  },
  taskItem: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  taskContent: {
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  taskDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  taskStatus: {
    fontSize: 12,
    color: "#888",
  },
  completedTask: {
    textDecorationLine: "line-through",
    opacity: 0.6,
  },
  taskActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  editButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  loadingText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
  },
  errorContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  retryButton: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
  },
});

export default TaskManager;
