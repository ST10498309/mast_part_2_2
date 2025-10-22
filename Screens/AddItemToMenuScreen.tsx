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

export default function AddMenuItemScreen({ route, navigation }: any) {
  const { addItem } = route.params;

  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [course, setCourse] = useState("Starter"); 

  const handleSave = () => {
    if (!dishName || !description || !price) {
      Alert.alert("Error", "Please fill in all fields!");
      return;
    }

    addItem({
      name: dishName,
      desc: description,
      price: price,
      course: course,
    });

    setDishName("");
    setDescription("");
    setPrice("");
    setCourse("Starter");
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add a New Menu Item</Text>

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        placeholderTextColor="#ccc"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        placeholderTextColor="#ccc"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

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

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Item</Text>
      </TouchableOpacity>

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
