import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FeedScreen from './Feed';
import RequestScreen from './Request';
import CustomTabBar from './CustomTabBar';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBar={props => <CustomTabBar {...props} />}
            screenOptions={{
                tabBarIndicatorStyle: { backgroundColor: 'transparent' },
                tabBarStyle: { backgroundColor: '#FFF' },
                tabBarActiveTintColor: '#E21629',
                tabBarInactiveTintColor: '#0F0C20',
            }}
        >
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Request" component={RequestScreen} />
        </Tab.Navigator>
    );
};

export default TopTabNavigator;
