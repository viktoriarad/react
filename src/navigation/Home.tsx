import React from 'react';
import HomePage from '../screens/Home';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
}