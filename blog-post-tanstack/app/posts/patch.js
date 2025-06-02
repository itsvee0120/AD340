import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useLocalSearchParams, router } from "expo-router";

const patchPost = async (postId, newTitle) => {
  const { data } = await axios.patch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    { title: newTitle } // Only send the title in the request body
  );
  return data;
};

export default function PatchPostScreen() {
  const { postId } = useLocalSearchParams(); // Get the post ID from the URL
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newTitle) => patchPost(postId, newTitle),
    onSuccess: (data) => {
      // Simulate updating the post in the cache
      queryClient.setQueryData(["posts"], (oldPosts) =>
        oldPosts.map((post) =>
          post.id === data.id ? { ...post, title: data.title } : post
        )
      );
      router.back(); // Go back to the posts list
    },
  });

  const handleSubmit = () => {
    if (title.trim()) {
      mutation.mutate(title); // Only send the title
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="New Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <Button title="Update Title" onPress={handleSubmit} color="#FFC107" />
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
});
