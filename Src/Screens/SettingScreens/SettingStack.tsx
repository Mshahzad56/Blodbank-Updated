import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingScreen from './SettingScreen';
import Password from '../Password/Password';
import ProfileView from '../Profile/ProfileView';
import Invitefriends from '../Invitefriends/Invitefriends';
import HomeProfile from '../HomeProfile/HomeProfile';
import SentRequest from '../SentRequest/SentRequest';








const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SettingScreen">
            <Stack.Screen name="SettingScreen" component={SettingScreen} />
            <Stack.Screen name="Password" component={Password} />
            <Stack.Screen name="ProfileView" component={ProfileView} />
            <Stack.Screen name="Invitefriends" component={Invitefriends} />
            <Stack.Screen name="HomeProfile" component={HomeProfile} />
            <Stack.Screen name="SentRequest" component={SentRequest} />
        </Stack.Navigator>
    );
};

export default StackNavigation;

