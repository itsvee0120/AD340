import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useLocalSearchParams, router } from "expo-router";

const updatePost = async (updatedPost) => {
  const { data } = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`,
    updatedPost
  );
  return data;
};

export default function EditPostScreen() {
  const { id, title: initialTitle, body: initialBody } = useLocalSearchParams();
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updatePost,
    onSuccess: (data) => {
      // Simulate updating the post in the cache
      queryClient.setQueryData(["posts"], (oldPosts) =>
        oldPosts.map((post) => (post.id === data.id ? data : post))
      );
      router.back(); // Go back to the posts list
    },
  });

  const handleSubmit = () => {
    mutation.mutate({ id, title, body });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Body"
        value={body}
        onChangeText={setBody}
        style={styles.input}
        multiline
      />
      <Button title="Update Post" onPress={handleSubmit} color="#28A745" />
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
