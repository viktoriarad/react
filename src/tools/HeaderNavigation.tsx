import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Info from '../screens/info';
import Home from '../screens/Home';
import ToDoList from '../screens/ToDoList';


const Stack = createStackNavigator();


const StackScreen: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Aplication',
          headerStyle: {
            backgroundColor: '#9595E8',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}
      />



    </Stack.Navigator>
  );
}

export default StackScreen;
