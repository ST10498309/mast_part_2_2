import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function WelcomeScreen({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../images/christo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.slogan}>
        “Personalised Flavours.{"\n"}Exceptional Moments.”
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#5C0A0A",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 250,
    height: 150,
    marginTop: 80,
    marginBottom: 30,
  },
  slogan: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#FFD700",
    textAlign: "center",
    marginBottom: 60,
  },
  button: {
    backgroundColor: "#FFD700",
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});
