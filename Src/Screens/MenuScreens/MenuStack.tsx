import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './MenuScreen';
import TermsandConditions from './TermsandConditions';
import Invitefriends from '../Invitefriends/Invitefriends';
import HelpCenter from './HelpCenter';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="MenuScreen">

            <Stack.Screen name="HomeScreen" component={MenuScreen} />

            <Stack.Screen name="TermsandConditions" component={TermsandConditions} />
            <Stack.Screen name="Invitefriends" component={Invitefriends} />
            <Stack.Screen name="HelpCenter" component={HelpCenter} />

        </Stack.Navigator>
    );
};

export default HomeStack;

