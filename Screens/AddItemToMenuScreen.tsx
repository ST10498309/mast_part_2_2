import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert
} from "react-native";
import { Picker } from '@react-native-picker/picker';

//Add a new menu item on the screen
export default function AddMenuItemScreen({ route, navigation }: any) {
  const { addItem } = route.params; // The HomeScreen function was used to add an item.

  // State of the form fields
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [course, setCourse] = useState("Starter");

  // The feature that manages the saving of a new menu item
  const handleSave = () => {
    if (!dishName || !description || !price) {
      Alert.alert("Error", "Please fill in all fields!"); //If any fields are empty, display an error.
      return;
    }

    // Use the passed function to add the new item.
    addItem({
      name: dishName,
      desc: description,
      price: price,
      course: course,
    });

    // Reset the form's fields
    setDishName("");
    setDescription("");
    setPrice("");
    setCourse("Starter");

    // Return to the previous screen
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title of the Screen */}
      <Text style={styles.title}>Add a New Menu Item</Text>

      {/* Input for dish name */}
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        placeholderTextColor="#ccc"
        value={dishName}
        onChangeText={setDishName}
      />

      {/* Input for dish description */}
      <TextInput
        style={styles.input}
        placeholder="Description"
        placeholderTextColor="#ccc"
        value={description}
        onChangeText={setDescription}
      />

      {/* Input for dish price */}
      <TextInput
        style={styles.input}
        placeholder="Price"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      {/* Dropdown for selecting course type */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={course}
          onValueChange={(itemValue) => setCourse(itemValue)}
          style={styles.picker}
          dropdownIconColor="#FFD700"
        >
          <Picker.Item label="Starter" value="Starter" />
          <Picker.Item label="Main" value="Main" />
          <Picker.Item label="Dessert" value="Dessert" />
        </Picker>
      </View>

      {/* Save button */}
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Item</Text>
      </TouchableOpacity>

      {/* Back button */}
      <TouchableOpacity
        style={[styles.button, styles.backButton]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Main styles for AddMenuItemScreen layout and elements
  container: {
    flexGrow: 1,
    backgroundColor: "#5C0A0A",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "#400707",
    color: "#fff",
    padding: 12,
    marginBottom: 20,
    borderRadius: 10,
  },
  pickerContainer: {
    width: "100%",
    backgroundColor: "#400707",
    borderRadius: 10,
    marginBottom: 20,
  },
  picker: {
    color: "#fff",
    width: "100%",
  },
  button: {
    backgroundColor: "#FFD700",
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginBottom: 15,
  },
  backButton: {
    backgroundColor: "#400707",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#cede58ff",
    textAlign: "center",
  },
});
