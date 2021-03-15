import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Router from './src/components/Routes/Router';
import FlatListPost from './src/components/screens/postScreen/FlatListPost';



export default function App() {
  return (
   <NavigationContainer>
      <StatusBar barStyle="auto" />
       <Router />
    </NavigationContainer>
  );
}

