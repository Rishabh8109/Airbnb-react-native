import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MapView from '../screens/MapScreen/MapView';
import FlatListPost from '../screens/postScreen/FlatListPost';

const Tab = createMaterialTopTabNavigator();

function TopNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      tabBarOptions={{
        activeTintColor: '#0c25b3',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: '#f2f3f6' },
      }}
    >
      <Tab.Screen
        name="Explore"
        component={FlatListPost}
        options={{ tabBarLabel: 'Explore' }}
      />
      <Tab.Screen
        name="map"
        component={MapView}
        options={{ tabBarLabel: 'Map' }}
      />
    </Tab.Navigator>
  );
}

export default TopNavigator;