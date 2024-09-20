import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Src/Screens/Login/Login';
import SpalishOne from '../Src/Screens/SpalishScreens/SpalishOne';
import SpalishTwo from '../Src/Screens/SpalishScreens/SpalishTwo';
import SpalishThree from '../Src/Screens/SpalishScreens/SpalishThree';
import ConditionsOne from '../Src/Screens/Conditions/ConditionsOne';
import ConditionsTwo from '../Src/Screens/Conditions/ConditionsTwo';
import ConditionsThree from '../Src/Screens/Conditions/ConditionsThree';
import LoginTwo from '../Src/Screens/Login/LoginTwo';
import FirstOtp from '../Src/Screens/OTPScreens/FirstOtp';
import Questionnaires from '../Src/Screens/Questionnaires/Questionnaires';
import PersonalDetails from '../Src/Screens/PersonalDetails/PersonalDetails';
import Successfull from '../Src/Screens/Successfull/Successfull';
import HomeScreen from '../Src/Screens/HomeScreen/HomeScreen';
import Profile from '../Src/Screens/Profile/Profile';
import VideoCall from '../Src/Screens/VideoCall/VideoCall';
import LocationScreen from '../Src/Screens/Location/LocationScreen';
import Notification from '../Src/Screens/Notification/Notification';
import Detail from '../Src/Screens/Location/Detail';
import EmergencyDonor from '../Src/Screens/EmergencyDonor/EmergencyDonor';
import DonorDetails from '../Src/Screens/EmergencyDonor/DonorDetails';
import VoiceCall from '../Src/Screens/VoiceCall/VoiceCall';
import ChatBoxScreen from '../Src/Screens/ChatListScreen/ChatBoxScreen';
import ChatListScreen from '../Src/Screens/ChatListScreen/ChatListScreen';
import SettingScreen from '../Src/Screens/SettingScreens/SettingScreen';
import Password from '../Src/Screens/Password/Password';
import ProfileView from '../Src/Screens/Profile/ProfileView';
import Invitefriends from '../Src/Screens/Invitefriends/Invitefriends';
import HomeProfile from '../Src/Screens/HomeProfile/HomeProfile';
import SentRequest from '../Src/Screens/SentRequest/SentRequest';
import BottomNavigation from './BottomNavigation';
import NearbyDonor from '../Src/Screens/SentRequest/NearbyDonor';
import BloodDonate from "../Src/Screens/SentRequest/BloodDonate"
import ManageAddress from '../Src/Screens/ManageAddress/ManageAddress';
import ProfileCreate from '../Src/Screens/ProfileCreate/ProfileCreate';
import Notificationsetting from '../Src/Screens/Notification/Notificationsetting';
import Compatibility from '../Src/Screens/Compatibility/Compatibility';
import PaymentMethod from '../Src/Screens/Payment/PaymentMethod';
import AddCard from '../Src/Screens/Payment/AddCard';
import LocatonDetail from '../Src/Screens/Location/LocatonDetail';
import LocationNearBy from '../Src/Screens/SentRequest/LocationNearBy';



const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SpalishOne">
            <Stack.Screen name="SpalishOne" component={SpalishOne} />
            <Stack.Screen name="SpalishTwo" component={SpalishTwo} />
            <Stack.Screen name="SpalishThree" component={SpalishThree} />
            <Stack.Screen name="ConditionsOne" component={ConditionsOne} />
            <Stack.Screen name="ConditionsTwo" component={ConditionsTwo} />
            <Stack.Screen name="ConditionsThree" component={ConditionsThree} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="LoginTwo" component={LoginTwo} />
            <Stack.Screen name="FirstOtp" component={FirstOtp} />
            <Stack.Screen name="Questionnaires" component={Questionnaires} />
            <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
            <Stack.Screen name="Successfull" component={Successfull} />
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="VideoCall" component={VideoCall} />
            <Stack.Screen name="LocationScreen" component={LocationScreen} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="EmergencyDonor" component={EmergencyDonor} />
            <Stack.Screen name="DonorDetails" component={DonorDetails} />
            <Stack.Screen name="VoiceCall" component={VoiceCall} />
            <Stack.Screen name="ChatBoxScreen" component={ChatBoxScreen} />
            <Stack.Screen name="ChatListScreen" component={ChatListScreen} />
            <Stack.Screen name="SettingScreen" component={SettingScreen} />
            <Stack.Screen name="Password" component={Password} />
            <Stack.Screen name="HomeProfile" component={HomeProfile} />
            <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
            <Stack.Screen name="AddCard" component={AddCard} />
            <Stack.Screen name="LocatonDetail" component={LocatonDetail} />
            <Stack.Screen name="LocationNearBy" component={LocationNearBy} />
        </Stack.Navigator>
    );
};

export default StackNavigation;

