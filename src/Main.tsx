import React, { FC } from 'react';
import { SafeAreaView, Platform, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Info from './screens/info';
import Home from './screens/Home';
import ToDoList from './screens/ToDoList';
import 'react-native-gesture-handler';
import BottomTabs from './tools/BottomNavigation';
import StackScreen from './tools/HeaderNavigation';


interface IMainProps { }

const Main: FC<IMainProps> = props => {
    return (
        <>
            <NavigationContainer>
                <StackScreen />
            </NavigationContainer >
            <NavigationContainer>
                <BottomTabs />
            </NavigationContainer >
        </>
    );
};

export default Main;
