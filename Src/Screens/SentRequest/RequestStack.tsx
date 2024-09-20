import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SentRequest from './SentRequest';
import DOnor from './DOnor';
import LocationNearBy from './LocationNearBy';





const Stack = createNativeStackNavigator();

const RequestStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SentRequest">

            <Stack.Screen name="SentRequest" component={SentRequest} />
            <Stack.Screen name="DOnor" component={DOnor} />
            <Stack.Screen name="LocationNearBy" component={LocationNearBy} />
        </Stack.Navigator>
    );
};

export default RequestStack;

