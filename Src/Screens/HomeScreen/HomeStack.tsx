import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import ProfileView from '../Profile/ProfileView';
import Invitefriends from '../Invitefriends/Invitefriends';
import HomeProfile from '../HomeProfile/HomeProfile';
import SentRequest from '../SentRequest/SentRequest';
import NearbyDonor from '../SentRequest/NearbyDonor';
import BloodDonate from '../SentRequest/BloodDonate';
import ManageAddress from '../ManageAddress/ManageAddress';
import ProfileCreate from '../ProfileCreate/ProfileCreate';
import Notificationsetting from '../Notification/Notificationsetting';
import Compatibility from '../Compatibility/Compatibility';
import ChatWithUs from '../MenuScreens/ChatWithUs';
import HomeScreenPaid from './HomeScreenPaid';





const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeScreen">

            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="HomeScreenPaid" component={HomeScreenPaid} />
            <Stack.Screen name="ProfileView" component={ProfileView} />
            <Stack.Screen name="Invitefriends" component={Invitefriends} />
            <Stack.Screen name="HomeProfile" component={HomeProfile} />
            <Stack.Screen name="SentRequest" component={SentRequest} />
            <Stack.Screen name="NearbyDonor" component={NearbyDonor} />
            <Stack.Screen name="BloodDonate" component={BloodDonate} />
            <Stack.Screen name="ManageAddress" component={ManageAddress} />
            <Stack.Screen name="ProfileCreate" component={ProfileCreate} />
            <Stack.Screen name="Notificationsetting" component={Notificationsetting} />
            <Stack.Screen name="Compatibility" component={Compatibility} />
            <Stack.Screen name="ChatWithUs" component={ChatWithUs} />
        </Stack.Navigator>
    );
};

export default HomeStack;

