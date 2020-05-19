import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import BottomTabs from './navigation/BottomNavigation';


interface IMainProps { }

const Main: FC<IMainProps> = props => {
    return (
        <>
            <NavigationContainer>
                <BottomTabs />
            </NavigationContainer >
        </>
    );
};

export default Main;
