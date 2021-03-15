import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import BottomTabNavigation from '../navigation/BottomTabNavigation';
import SearchScreen from '../screens/searchScreen/index';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="bottomTab"
      screenOptions={{
        headerShown : false,
        gestureEnabled : true,
        ...TransitionPresets.FadeFromBottomAndroid
      }}

     >
       <Stack.Screen name="searchExplore" component={SearchScreen}/>
       <Stack.Screen name="bottomTab" component={BottomTabNavigation}/>
    </Stack.Navigator>
  )
}

export default Router;
