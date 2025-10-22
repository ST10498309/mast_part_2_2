import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./Screens/WelcomeScreen";
import HomeScreen from "./Screens/HomeScreen";
import AddMenuItemScreen from "./Screens/AddItemToMenuScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="AddItem" 
          component={AddMenuItemScreen} 
          options={{ title: "Add Menu Item" }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
