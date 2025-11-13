import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

// Menu items can be filtered and shown by course on this screen.
export default function FilterMenu({ route }: any) {
  const menuItems = route?.params?.menuItems || []; // Obtain menu items using the route parameters
  const [filteredItems, setFilteredItems] = useState(menuItems); // State of the filtered items

  // The ability to filter menu items based on courses
  const filterByCourse = (course: string) => {
    if (course === "All") {
      setFilteredItems(menuItems); // Shows all the items
    } else {
      setFilteredItems(menuItems.filter((item: { course: string }) => item.course === course)); // Sort by the chosen course
    }
  };

  return (
    <View style={styles.container}>
      {/* Title of Screen */}
      <Text style={styles.title}>Filter Menu Items</Text>

      {/* Buttons for choosing a course filter */}
      <View style={styles.buttonsContainer}>
        {["All", "Starter", "Main", "Dessert"].map(course => (
          <TouchableOpacity
            key={course}
            style={styles.filterButton}
            onPress={() => filterByCourse(course)}
          >
            <Text style={styles.filterButtonText}>{course}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/*Shows a list of filtered menu items */}
      <FlatList
        data={filteredItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>
              {item.name} - {item.course} - R{item.price}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // Primary styles for the elements and layout of the FilterMenu screen
  container: { flex: 1, padding: 20, backgroundColor: "#5C0A0A" },
  title: { fontSize: 20, fontWeight: "bold", color: "#FFD700", marginBottom: 20 },
  buttonsContainer: { flexDirection: "row", justifyContent: "space-around", marginBottom: 20 },
  filterButton: { backgroundColor: "#400707", padding: 10, borderRadius: 10 },
  filterButtonText: { color: "#FFD700", fontWeight: "bold" },
  item: { padding: 10, backgroundColor: "#400707", borderRadius: 10, marginBottom: 10 },
  itemText: { color: "#FFD700" }
});
