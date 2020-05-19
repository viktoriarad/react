import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Info from './Info';
import Home from './Home';
import ToDoList from './ToDoList';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../constants/Colors';

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors.darkBlue,
        inactiveBackgroundColor: Colors.whiteWash,
        activeBackgroundColor: Colors.whiteWash,
        inactiveTintColor: Colors.gray,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ToDolist"
        component={ToDoList}
        options={{
          tabBarLabel: 'To Do List',
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={Info}
        options={{
          tabBarLabel: 'Info',
          tabBarIcon: ({ color, size }) => (
            <Icon name="info" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )

};

export default BottomTabs;