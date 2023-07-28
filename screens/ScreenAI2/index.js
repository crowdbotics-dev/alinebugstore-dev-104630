import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from "react";
import { Text, Image, StyleSheet, SafeAreaView } from "react-native";

const SplashScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <Image source={require("./bugs.png")} style={styles.logo} />
      <Pressable onPress={() => {
      navigation.navigate("ScreenAI6");
    }}><Text style={styles.title}>Bug Bounty</Text></Pressable>
      <Text style={styles.subtitle}>Find and report bugs for rewards</Text>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F4E5"
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: "#888888"
  }
});
export default SplashScreen;