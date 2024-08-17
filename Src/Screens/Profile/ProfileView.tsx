import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProfileView = ({ navigation }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        {
            step: '200cc Blood Donation',
            date: '27.01.02',
            additionalInfo: '@City the first hospital'
        },
        {
            step: 'Cold',
            date: '27.01.02',
            additionalInfo: '@City the first hospital'
        },
    ];

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <AntDesign name="left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.title}>Profile</Text>
            </View>

            {/* ScrollView for scrollable content */}
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {/* Profile Information */}
                <View style={styles.ProfileFlex}>
                    <View style={styles.profileInfo}>
                        <Image source={require("../../Assets/Image/Profile.png")} style={styles.ProfileImage} />
                        <View>
                            <Text style={styles.Name}>Hasnain Karim</Text>
                            <Text style={styles.Number}>162cm, 70Kg</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.BloodName}>A +</Text>
                        <Text style={styles.BloodNameType}>Type</Text>
                    </View>
                </View>

                {/* Contact Information */}
                <View>
                    <Text style={styles.PhoneNumber}>Phone number</Text>
                    <View style={styles.NumberBox}>
                        <Text style={styles.PhoneNumber}>+923564895214</Text>
                    </View>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.PhoneNumber}>Address</Text>
                    <View style={styles.NumberBox}>
                        <Text style={styles.PhoneNumber}>Gilgit, jutial sector 2525, salar road</Text>
                    </View>
                </View>
                <Text style={styles.PhoneNumber}>History</Text>

                {/* Step Indicator */}
                <StepIndicator steps={steps} currentStep={currentStep} />
            </ScrollView>
        </View>
    );
};

// Step Indicator Component
const StepIndicator = ({ steps, currentStep }) => {
    return (
        <View style={styles.indicatorContainer}>
            {steps.map((step, index) => (
                <View key={index} style={styles.stepContainer}>
                    {/* Date */}
                    <View style={styles.leftTextContainer}>
                        <Text style={styles.subText}> {step.date}</Text>
                    </View>

                    {/* Circle and Line */}
                    <View style={styles.circleContainer}>
                        <View style={[
                            styles.circle,
                            index < currentStep ? styles.completedCircle : {},
                            index === currentStep ? styles.currentCircle : {}
                        ]} />
                        {/* Vertical Line */}
                        {index < steps.length - 1 && (
                            <View style={styles.line} />
                        )}
                    </View>

                    {/* Step Information */}
                    <View style={styles.rightTextContainer}>
                        <Text style={styles.rightText}>{step.step}</Text>
                        <Text style={styles.subText}>{step.additionalInfo}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
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
        color: "#0F0C20",
    },
    ProfileFlex: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
    },
    profileInfo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    ProfileImage: {
        width: 84,
        height: 84,
        borderRadius: 50,
    },
    Name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#000000",
    },
    Number: {
        color: "#676A6C",
        fontSize: 15,
        fontWeight: "400",
    },
    BloodName: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "500",
    },
    BloodNameType: {
        color: "#73737B",
        fontSize: 15,
        fontWeight: "400",
    },
    NumberBox: {
        borderColor: "#E3E3E3",
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
    },
    PhoneNumber: {
        color: "#000000",
        fontSize: 16,
        fontWeight: "400",
    },
    scrollViewContent: {
        paddingVertical: 20,
    },
    indicatorContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    stepContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        position: 'relative',
    },
    circleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        position: 'relative',
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#E0E0E0',
        borderWidth: 2,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    completedCircle: {
        borderColor: '#4CAF50',
    },
    currentCircle: {
        borderColor: '#DE0A1E',
    },
    line: {
        position: 'absolute',
        top: 30,
        left: 14,
        width: 2,
        height: 40,
        backgroundColor: '#E0E0E0',
        zIndex: 0,
    },
    rightTextContainer: {
        flex: 2,
        justifyContent: 'center',
        marginLeft: 10,
    },
    rightText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '500',
    },
    subText: {
        color: '#73737B',
        fontSize: 15,
        fontWeight: "400"
    },
    leftTextContainer: {
        marginRight: 10,
    },
});

export default ProfileView;
