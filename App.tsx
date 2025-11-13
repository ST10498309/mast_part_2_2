import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Imported screens
import WelcomeScreen from "./Screens/WelcomeScreen";
import HomeScreen from "./Screens/HomeScreen";
import AddMenuItemScreen from "./Screens/AddItemToMenuScreen";
import FilterMenuScreen from './Screens/FilterScreen';

// Stack navigator
const Stack = createNativeStackNavigator();

// Navigation in the main app component
export default function App() {
  return (
    // Using a navigation container to control the navigation state of an app
    <NavigationContainer>
      {/* Stack navigator to handle screen transitions */}
      <Stack.Navigator initialRouteName="Welcome">
        {/* Welcome screen (initial screen) */}
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />

        {/* Home screen (main menu screen) */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />

        {/* To add a new menu item, use this screen. */}
        <Stack.Screen 
          name="AddItem" 
          component={AddMenuItemScreen} 
          options={{ title: "Add Menu Item" }} 
        />

        {/* Filtering menu items on the screen*/}
        <Stack.Screen 
          name="Filter" 
          component={FilterMenuScreen} 
          options={{ title: "Filter Menu" }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
