import React from 'react';
import InfoPage from '../screens/Info';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Info() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Info" component={InfoPage} />
    </Stack.Navigator>
  );
}