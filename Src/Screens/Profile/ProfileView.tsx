// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';

// const ProfileView = ({ navigation }) => {
//     const [currentStep, setCurrentStep] = useState(0);

//     const steps = [
//         {
//             step: '200cc Blood Donation',
//             date: '27.01.02',
//             additionalInfo: '@City the first hospital'
//         },
//         {
//             step: 'Cold',
//             date: '27.01.02',
//             additionalInfo: '@City the first hospital'
//         },
//     ];

//     return (
//         <View style={styles.container}>
//             <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

//             {/* Header */}
//             <View style={styles.header}>
//                 <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//                     <AntDesign name="left" size={24} color="#000" />
//                 </TouchableOpacity>
//                 <Text style={styles.title}>Profile</Text>
//             </View>

//             {/* ScrollView for scrollable content */}
//             <ScrollView contentContainerStyle={styles.scrollViewContent}>
//                 {/* Profile Information */}
//                 <View style={styles.ProfileFlex}>
//                     <View style={styles.profileInfo}>
//                         <Image source={require("../../Assets/Image/Profile.png")} style={styles.ProfileImage} />
//                         <View>
//                             <Text style={styles.Name}>Hasnain Karim</Text>
//                             <Text style={styles.Number}>162cm, 70Kg</Text>
//                         </View>
//                     </View>
//                     <View>
//                         <Text style={styles.BloodName}>A +</Text>
//                         <Text style={styles.BloodNameType}>Type</Text>
//                     </View>
//                 </View>

//                 {/* Contact Information */}
//                 <View>
//                     <Text style={styles.PhoneNumber}>Phone number</Text>
//                     <View style={styles.NumberBox}>
//                         <Text style={styles.PhoneNumber}>+923564895214</Text>
//                     </View>
//                 </View>
//                 <View style={{ marginBottom: 20 }}>
//                     <Text style={styles.PhoneNumber}>Address</Text>
//                     <View style={styles.NumberBox}>
//                         <Text style={styles.PhoneNumber}>Gilgit, jutial sector 2525, salar road</Text>
//                     </View>
//                 </View>
//                 <Text style={styles.PhoneNumber}>History</Text>

//                 {/* Step Indicator */}
//                 <StepIndicator steps={steps} currentStep={currentStep} />
//             </ScrollView>
//         </View>
//     );
// };

// // Step Indicator Component
// const StepIndicator = ({ steps, currentStep }) => {
//     return (
//         <View style={styles.indicatorContainer}>
//             {steps.map((step, index) => (
//                 <View key={index} style={styles.stepContainer}>
//                     {/* Date */}
//                     <View style={styles.leftTextContainer}>
//                         <Text style={styles.subText}> {step.date}</Text>
//                     </View>

//                     {/* Circle and Line */}
//                     <View style={styles.circleContainer}>
//                         <View style={[
//                             styles.circle,
//                             index < currentStep ? styles.completedCircle : {},
//                             index === currentStep ? styles.currentCircle : {}
//                         ]} />
//                         {/* Vertical Line */}
//                         {index < steps.length - 1 && (
//                             <View style={styles.line} />
//                         )}
//                     </View>

//                     {/* Step Information */}
//                     <View style={styles.rightTextContainer}>
//                         <Text style={styles.rightText}>{step.step}</Text>
//                         <Text style={styles.subText}>{step.additionalInfo}</Text>
//                     </View>
//                 </View>
//             ))}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#FFF",
//         paddingHorizontal: 20,
//     },
//     header: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingVertical: 10,
//     },
//     backButton: {
//         paddingRight: 10,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: '500',
//         flex: 1,
//         textAlign: 'center',
//         color: "#0F0C20",
//     },
//     ProfileFlex: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         paddingVertical: 20,
//     },
//     profileInfo: {
//         flexDirection: "row",
//         alignItems: "center",
//         gap: 10,
//     },
//     ProfileImage: {
//         width: 84,
//         height: 84,
//         borderRadius: 50,
//     },
//     Name: {
//         fontSize: 15,
//         fontWeight: "500",
//         color: "#000000",
//     },
//     Number: {
//         color: "#676A6C",
//         fontSize: 15,
//         fontWeight: "400",
//     },
//     BloodName: {
//         color: "#000000",
//         fontSize: 18,
//         fontWeight: "500",
//     },
//     BloodNameType: {
//         color: "#73737B",
//         fontSize: 15,
//         fontWeight: "400",
//     },
//     NumberBox: {
//         borderColor: "#E3E3E3",
//         borderWidth: 1,
//         padding: 10,
//         borderRadius: 8,
//         marginTop: 10,
//     },
//     PhoneNumber: {
//         color: "#000000",
//         fontSize: 16,
//         fontWeight: "400",
//     },
//     scrollViewContent: {
//         paddingVertical: 20,
//     },
//     indicatorContainer: {
//         alignItems: 'center',
//         paddingVertical: 20,
//     },
//     stepContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 20,
//         position: 'relative',
//     },
//     circleContainer: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: 30,
//         position: 'relative',
//     },
//     circle: {
//         width: 30,
//         height: 30,
//         borderRadius: 15,
//         borderColor: '#E0E0E0',
//         borderWidth: 2,
//         backgroundColor: 'transparent',
//         justifyContent: 'center',
//         alignItems: 'center',
//         zIndex: 1,
//     },
//     completedCircle: {
//         borderColor: '#4CAF50',
//     },
//     currentCircle: {
//         borderColor: '#DE0A1E',
//     },
//     line: {
//         position: 'absolute',
//         top: 30,
//         left: 14,
//         width: 2,
//         height: 40,
//         backgroundColor: '#E0E0E0',
//         zIndex: 0,
//     },
//     rightTextContainer: {
//         flex: 2,
//         justifyContent: 'center',
//         marginLeft: 10,
//     },
//     rightText: {
//         color: '#000000',
//         fontSize: 18,
//         fontWeight: '500',
//     },
//     subText: {
//         color: '#73737B',
//         fontSize: 15,
//         fontWeight: "400"
//     },
//     leftTextContainer: {
//         marginRight: 10,
//     },

// export default ProfileView;




import {
    Image,
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Switch } from 'react-native-paper';
const { width, height } = Dimensions.get('window');

const ProfileView = ({ navigation }) => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <AntDesign name="left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.title}>Profile</Text>
            </View>

            <View style={styles.ProfileBox}>
                <Image source={require('../../Assets/Image/Profile.png')} style={styles.ProfileImage} />
                <Text style={styles.Name}>Sumaira Alam</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Entypo name="star" color="#FFB923" size={18} />
                    <Entypo name="star" color="#FFB923" size={18} />
                    <Entypo name="star" color="#FFB923" size={18} />
                    <Entypo name="star" color="#FFB923" size={18} />
                    <Entypo name="star" color="#FFB923" size={18} />
                    <Text style={styles.rating}>5.9</Text>
                </View>
                <Text style={styles.Contect}>03554441144</Text>
                <View style={styles.NestedBox}>
                    <View style={styles.nestedItem}>
                        <Ionicons name="person-circle-outline" color="#E21629" size={24} />
                        <Text style={styles.nestedText}>5 Life Save</Text>
                    </View>
                    <View style={styles.nestedItem}>
                        <Entypo name="star" color="#FFB923" size={24} />
                        <Text style={styles.nestedText}>Top Rated</Text>
                    </View>
                    <View style={styles.nestedItem}>
                        <ImageBackground
                            source={require('../../Assets/Image/Cover.png')}
                            style={styles.BGimage}
                        >
                            <Text>A+</Text>
                        </ImageBackground>
                        <Text style={styles.nestedText}>Blood Group</Text>
                    </View>
                </View>
            </View>

            <View style={styles.SecondView}>
                <View style={{ flexDirection: 'row', gap: 5, }}>
                    <Octicons name="people" color="#E21629" size={30} />
                    <Text style={styles.Availabletext}>Available To Donate</Text>
                </View>
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color="#E21629" />
            </View>

            <TouchableOpacity style={styles.flexBox} onPress={() => navigation.navigate('ManageAddress')}>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <Entypo name="location-pin" color="#E21629" size={28} />
                    <Text style={styles.Availabletext}>Manage Address</Text>
                </View>
                <AntDesign name="right" color="#000000" size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.flexBox} onPress={() => navigation.navigate('ProfileCreate')}>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <Ionicons name="person-outline" color="#000000" size={28} />
                    <Text style={styles.Availabletext}>Profile</Text>
                </View>
                <AntDesign name="right" color="#000000" size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.flexBox} onPress={() => navigation.navigate('ProfileCreate')}>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <Octicons name="note" color="#E21629" size={28} />
                    <Text style={styles.Availabletext}>Add Payment</Text>
                </View>
                <AntDesign name="right" color="#000000" size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.flexBox} onPress={() => navigation.navigate('Notificationsetting')}>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <Ionicons name="notifications-outline" color="#000000" size={28} />
                    <Text style={styles.Availabletext}>Notification</Text>
                </View>
                <AntDesign name="right" color="#000000" size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.flexBox} onPress={() => navigation.navigate('Feedback')}>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <MaterialIcons name="feedback" color="#000000" size={28} />
                    <Text style={styles.Availabletext}>Feedback</Text>
                </View>
                <AntDesign name="right" color="#000000" size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.flexBox} onPress={() => navigation.navigate('Compatibility')}>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <Ionicons name="extension-puzzle-outline" color="#000000" size={28} />
                    <Text style={styles.Availabletext}>Compatibility</Text>
                </View>
                <AntDesign name="right" color="#000000" size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.flexBox} onPress={() => navigation.navigate('RateUs')}>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <Entypo name="star" color="#FFB923" size={28} />
                    <Text style={styles.Availabletext}>Rate Us</Text>
                </View>
                <AntDesign name="right" color="#000000" size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.flexBox} onPress={() => navigation.navigate('Logout')}>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <Entypo name="log-out" color="#E21629" size={28} />
                    <Text style={styles.Availabletext}>Logout</Text>
                </View>
                <AntDesign name="right" color="#000000" size={20} />
            </TouchableOpacity>
        </View>
    );
};

export default ProfileView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    backButton: {
        paddingRight: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        flex: 1,
        textAlign: 'center',
        color: '#0F0C20',
    },
    ProfileBox: {
        backgroundColor: '#E21629',
        width: '100%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingTop: height * -0.03,
        marginTop: height * 0.07,
        height: height * 0.22,
    },
    ProfileImage: {
        width: 84,
        height: 84,
        borderRadius: 42,
        position: 'absolute',
        top: -42,
    },
    NestedBox: {
        width: '90%',
        backgroundColor: '#FFF',
        position: 'absolute',
        bottom: -25,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // Shadow for Android
        elevation: 5,
    },
    nestedItem: {
        alignItems: 'center',
        width: width * 0.25,
    },
    nestedText: {
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },
    Name: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: height * 0.004,
    },
    rating: {
        color: '#FFFFFF',
        marginHorizontal: 10,
        fontSize: 18,
        fontWeight: '500',
    },
    Contect: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 10,
    },
    BGimage: {
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SecondView: {
        marginTop: height * 0.06,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Availabletext: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '400',
    },
    flexBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: height * 0.01,
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#F5F5F5',
        paddingVertical: height * 0.015,
        borderRadius: 8,
    },
});
