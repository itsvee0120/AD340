// app/index.js
import { Link } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>Welcome to the App!</Text>
      <Link href="/posts" asChild>
        <Button title="Go to Posts" />
      </Link>
    </View>
  );
}
