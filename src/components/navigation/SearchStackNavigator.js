import React from "react";
import { View, Text, TextInput } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import searchScreen from "../screens/searchScreen/index";
import HomeScreen from "../screens/HomeSreens/HomeScreen";
import TopNavigator from "./TopNavigator";

const Stack = createStackNavigator();

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      gestureEnabled : true,
      headerShown : false,
      ...TransitionPresets.ScaleFromCenterAndroid
    }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Find your place" component={searchScreen} />
      <Stack.Screen
       name="places"
       component={TopNavigator}
        options={{
          headerShown : true
        }}
        />
    </Stack.Navigator>
  );
};

export default SearchStackNavigator;
