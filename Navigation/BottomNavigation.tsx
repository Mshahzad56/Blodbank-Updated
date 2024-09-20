import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FeedBack from '../Src/Screens/FeedBack/FeedBack';

import HomeScreen from '../Src/Screens/HomeScreen/HomeStack';
import ChatListScreen from '../Src/Screens/ChatListScreen/ChatListScreen';
import RequestStack from '../Src/Screens/SentRequest/RequestStack';
import Invitefriends from '../Src/Screens/Invitefriends/Invitefriends';
import MenuStack from '../Src/Screens/MenuScreens/MenuStack';
import MenuScreen from '../Src/Screens/MenuScreens/MenuScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#E21629',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    let IconComponent = AntDesign;

                    if (route.name === 'FeedBack') {
                        iconName = 'feedback'; // Use an appropriate icon name
                        IconComponent = Ionicons; // or any other icon component
                    } else if (route.name === 'chat') {
                        iconName = 'chatbubble-outline';
                        IconComponent = Ionicons;
                    } else if (route.name === 'Home') {
                        iconName = 'home';
                        IconComponent = Feather;
                    } else if (route.name === 'Request') {
                        iconName = 'frequently-asked-questions';
                        IconComponent = MaterialCommunityIcons;
                    } else if (route.name === 'menu') {
                        iconName = 'menu'; // Entypo icon name
                        IconComponent = Entypo;
                    } else if (route.name === 'Collections') {
                        iconName = 'appstore-o';
                    } else if (route.name === 'More') {
                        iconName = 'ellipsis1';
                    }

                    return <IconComponent name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="FeedBack" component={FeedBack} />
            <Tab.Screen name="chat" component={ChatListScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Request" component={RequestStack} />
            <Tab.Screen name="menu" component={MenuStack} />
            {/* <Tab.Screen name="Me" component={MeScreen} />
            <Tab.Screen name="Collections" component={Collection} />
            <Tab.Screen name="More" component={MoreScreens} /> */}
        </Tab.Navigator>
    );
};

export default BottomNavigation;
