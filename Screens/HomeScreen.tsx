import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Alert } from "react-native";

export default function HomeScreen({ navigation }: any) {
  const [menuItems, setMenuItems] = useState<
    Array<{ name: string; desc: string; price: string; course: string }>
  >([]);

  const calculateAveragePrice = () => {
    if (menuItems.length === 0) return 0;
    const total = menuItems.reduce((sum, item) => sum + Number(item.price), 0);
    return (total / menuItems.length).toFixed(2);
  };

  const handleDelete = (index: number) => {
    Alert.alert(
      "Delete item",
      `Are you sure you want to delete "${menuItems[index].name}"?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: () => {
          const updated = [...menuItems];
          updated.splice(index, 1);
          setMenuItems(updated);
        } }
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require("../images/christo.png")} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Welcome to Chef’s Christoffel’s Kitchen</Text>
        <Text style={styles.subtitle}>
          Easily manage tonight’s menu, add new dishes, edit existing ones, or organise by course.
        </Text>
        <Text style={styles.countText}>Items Added: {menuItems.length}</Text>
        {menuItems.length > 0 && (
          <Text style={styles.averagePrice}>Average Price: R{calculateAveragePrice()}</Text>
        )}
      </View>

      {menuItems.length > 0 && (
        <View style={styles.menuList}>
          <Text style={styles.menuTitle}>Tonight's Menu</Text>
          {["Starter", "Main", "Dessert"].map((courseType) => {
            const items = menuItems
              .filter((item) => item.course === courseType)
              .reverse();
            if (items.length === 0) return null;
            return (
              <View key={courseType} style={styles.courseSection}>
                <Text style={styles.courseTitle}>{courseType}</Text>
                {items.map((item, index) => (
                  <View key={index} style={styles.menuItem}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemDesc}>{item.desc}</Text>
                    <Text style={styles.itemPrice}>R{item.price}</Text>
                    <TouchableOpacity
                      style={styles.deleteBtn}
                      onPress={() => handleDelete(index)}
                    >
                      <Text style={styles.deleteText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            );
          })}
        </View>
      )}

      <Image source={require("../images/hero.png")} style={styles.hero} resizeMode="cover" />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require("../images/home.png")} style={styles.icon} />
          <Text style={styles.iconLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() =>
            navigation.navigate("AddItem", {
              addItem: (newItem: any) => setMenuItems([newItem, ...menuItems]),
            })
          }
        >
          <Image source={require("../images/additem.png")} style={styles.icon} />
          <Text style={styles.iconLabel}>Add Item</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate("Filter", { menuItems })}
        >
          <Image source={require("../images/filter.jpeg")} style={styles.icon} />
          <Text style={styles.iconLabel}>Filter</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#5C0A0A",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: "#FFD700",
    fontWeight: "bold",
    textAlign: "center",
  },
  countText: {
    fontSize: 16,
    color: "#FFD700",
    marginTop: 5,
  },
  averagePrice: {
    fontSize: 16,
    color: "#FFD700",
    fontWeight: "bold",
    marginTop: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 20,
  },
  hero: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    backgroundColor: "#400707",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 30,
  },
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginBottom: 5,
  },
  iconLabel: {
    color: "#FFD700",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  menuList: {
    width: "100%",
    marginBottom: 20,
  },
  menuTitle: {
    fontSize: 18,
    color: "#FFD700",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  courseSection: {
    marginBottom: 20,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 5,
  },
  menuItem: {
    backgroundColor: "#400707",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemName: {
    color: "#FFD700",
    fontWeight: "bold",
    fontSize: 16,
  },
  itemDesc: {
    color: "#fff",
    fontSize: 14,
    marginVertical: 4,
  },
  itemPrice: {
    color: "#FFD700",
    fontWeight: "bold",
    fontSize: 14,
  },
  deleteBtn: {
    marginTop: 8,
    backgroundColor: "#FFD700",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  deleteText: {
    color: "#5C0A0A",
    fontWeight: "bold",
  },
});
