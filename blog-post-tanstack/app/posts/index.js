import React from "react";
import {
  FlatList,
  Text,
  View,
  Button,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link, router } from "expo-router";

const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

const deletePost = async (postId) => {
  const response = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return response.data;
};

export default function PostsScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: (_, postId) => {
      // Manually remove the deleted post from the cache
      queryClient.setQueryData(["posts"], (oldPosts) =>
        oldPosts.filter((post) => post.id !== postId)
      );
    },
  });

  const handleDelete = (postId) => {
    deleteMutation.mutate(postId);
  };

  if (isLoading)
    return <ActivityIndicator size="large" style={styles.loader} />;
  if (error) return <Text style={styles.error}>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <Link href="/posts/create" asChild>
        <Button title="Create Post" color="#007BFF" />
      </Link>
      <Link href="/posts/filter" asChild>
        <Button title="Filter Posts by User" color="#6C757D" />
      </Link>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postBody}>{item.body}</Text>
            <View style={styles.buttonContainer}>
              <Link
                href={`/posts/edit?id=${item.id}&title=${item.title}&body=${item.body}`}
                asChild
              >
                <Button title="Edit" color="#28A745" />
              </Link>
              <Button
                title="Patch Title"
                onPress={() => router.push(`/posts/patch?id=${item.id}`)}
                color="#FFC107"
              />
              <Button
                title="Delete"
                onPress={() => handleDelete(item.id)}
                color="#DC3545"
              />
            </View>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
});
