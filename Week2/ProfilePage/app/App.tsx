import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  StatusBar,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function App(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // Social links array for easier updates
  const socialIcons = [
    { name: "facebook", color: "#4267B2" },
    { name: "twitter", color: "#1DA1F2" },
    { name: "instagram", color: "#C13584" },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile Page</Text>
      </View>

      {/* Image Display */}
      <Image
        style={styles.profileImage}
        source={require("@/assets/images/bg.jpg")}
      />

      <Image
        style={styles.avatarImage}
        source={require("@/assets/images/Violet.jpeg")}
      />

      {/* Information Section */}
      <ScrollView style={styles.infoSection}>
        <Text style={styles.h1}>
          👋 Hi there! This is Violet's profile page
        </Text>

        <Text style={styles.subHeader}>About Me:</Text>

        <Text style={styles.infoText}>
          💁‍♀️ My name is Anh Nguyen, I also go by Violet!
        </Text>
        <Text style={styles.infoText}>
          💻 I'm a curious explorer of all things—give me a week, and I can geek
          out on just about anything!
        </Text>
        <Text style={styles.infoText}>
          🙌 I thrive on authenticity and creativity, and there's nothing I
          enjoy more than a deep dive into someone's wild, creative world.
        </Text>
        <Text style={styles.infoText}>
          Let’s swap ideas and see where our imaginations take us! Contact me
          using the form below!
        </Text>

        {/* Social Media Icons */}
        <View style={styles.line}>
          {socialIcons.map((icon, index) => (
            <FontAwesome
              key={index}
              name={icon.name}
              size={30}
              color={icon.color}
              style={{ marginHorizontal: 10 }}
            />
          ))}
        </View>
      </ScrollView>

      {/* Input Form */}
      <View style={styles.formSection}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Leave a comment"
          value={comment}
          onChangeText={setComment}
        />
        <Text style={styles.submitButton}>Submit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  header: {
    backgroundColor: "#8f67cf",
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },
  h1: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 25,
    marginTop: 35,
    textAlign: "center",
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,

    color: "black",
  },
  profileImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  avatarImage: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#FFF",
    position: "absolute",
    top: 170,
    left: "50%",
    marginLeft: -75,
  },
  infoSection: {
    padding: 20,
    flex: 1,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 15,
    color: "black",
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  formSection: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#FFF",
  },
  submitButton: {
    backgroundColor: "#8f67cf",
    color: "#FFF",
    textAlign: "center",
    padding: 12,
    borderRadius: 8,
    fontWeight: "bold",
  },
});
