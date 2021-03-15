import React from 'react';
import HomeScreen from "../screens/HomeSreens/HomeScreen";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import searchExploreScreen from '../navigation/SearchStackNavigator';

// createBottomTabNavigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
      <Tab.Navigator
         initialRouteName="Explore"
         tabBarOptions={{
           activeTintColor : "#f15454",
           tabStyle : {
             padding : 4
           }
         }}

       >
        <Tab.Screen
          name="Explore"
          component={searchExploreScreen}
          options={{
            tabBarLabel : "Explore",
            tabBarIcon : (({color}) => (
              <AntDesign name="search1" color={color} size={25} />
            )),

          }}
         />
         <Tab.Screen
         name="Saved"
         component={HomeScreen}
          options={{
            tabBarIcon : (({color}) => (
              <FontAwesome name="heart-o" color={color} size={25} />
            ))
          }}
         />
          <Tab.Screen
         name="Trips"
         component={HomeScreen}
          options={{
            tabBarIcon : (({color}) => (
              <FontAwesome5 name="airbnb" color={color} size={25} />
            ))
          }}
         />
        <Tab.Screen
         name="Inbox"
         component={HomeScreen}
          options={{
            tabBarIcon : (({color}) => (
              <MaterialCommunityIcons name="tooltip-outline" color={color} size={25} />
            ))
          }}
         />
           <Tab.Screen
            name="Profile"
           component={HomeScreen}
            options={{
              tabBarIcon : (({color}) => (
                <EvilIcons name="user" color={color} size={25} />
              ))
            }}
         />
      </Tab.Navigator>
  );
};

export default BottomTabNavigation;
