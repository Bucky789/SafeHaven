// src/navigation/AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ParentScreen from '../screens/ParentScreen';

type RootStackParamList = {
  Home: undefined;
  Parent: { latitude: number; longitude: number };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Parent" component={ParentScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
