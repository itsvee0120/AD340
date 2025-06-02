import React, { useState } from "react";
import {
  Button,
  TextInput,
  View,
  FlatList,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "expo-router";

const fetchPostsByUser = async (userId) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return data;
};

export default function FilterPostsScreen() {
  const [userId, setUserId] = useState("");
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["posts", userId],
    queryFn: () => fetchPostsByUser(userId),
    enabled: false, // Disable automatic fetching
  });

  const handleFilter = () => {
    if (userId) {
      refetch(); // Manually trigger the query
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter User ID"
        value={userId}
        onChangeText={setUserId}
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title="Filter Posts" onPress={handleFilter} color="#007BFF" />

      {isLoading && <ActivityIndicator size="large" style={styles.loader} />}
      {error && <Text style={styles.error}>Error: {error.message}</Text>}

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postBody}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F8F9FA",
  },
  input: {
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#DDDDDD",
  },
  loader: {
    marginTop: 20,
  },
  error: {
    color: "#DC3545",
    textAlign: "center",
    marginTop: 20,
  },
  postContainer: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 8,
  },
  postBody: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 16,
  },
});
