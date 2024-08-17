import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useCallback } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const DonorDetails = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { donor } = route.params;

    const startVoiceCall = useCallback(() => {
        try {
            // Navigate to the VoiceCallScreen
            navigation.navigate('VoiceCall', { callerDetails: cardDetails });
        } catch (error) {
            console.error("Navigation failed: ", error);
        }
    }, [navigation,]);
    const startVideoCall = useCallback(() => {
        try {
            // Navigate to the VideoCallScreen
            navigation.navigate('VideoCall'); // Ensure 'VideoCall' screen is correctly set up
        } catch (error) {
            console.error("Navigation failed: ", error);
        }
    }, [navigation]);

    // Extract distance value (numeric part)
    const distance = donor.distance.split(' ')[0]; // Assumes distance format is "3.1 km"

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#FFF" }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <AntDesign name="left" size={24} color="#0F0C20" />
                </TouchableOpacity>
                <View style={styles.OuterFlex}>
                    <Image source={require("../../Assets/Image/Profile.png")} style={styles.ProfileImage} />
                    <Text style={styles.Name}>{donor.name}</Text>
                    <Text style={styles.LOcationName}>Donor</Text>
                </View>
                <View style={styles.BOxFlexContect}>
                    <TouchableOpacity style={styles.BoxContact} onPress={startVoiceCall}>
                        <Feather name="phone-call" color="#3FA636" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.BoxContact} onPress={startVideoCall}>
                        <AntDesign name="videocamera" color="#3FA636" size={30} />
                    </TouchableOpacity>
                    <View style={styles.BoxContact}>
                        <Feather name="message-circle" color="#3FA636" size={30} />
                    </View>
                </View>
                <View style={{ paddingVertical: 20 }}>
                    <View style={styles.Line} />
                    <View style={styles.FlexBox}>
                        <View style={styles.BloodGroupContainer}>
                            <Text style={styles.Bloodgroup}>{donor.bloodGroup}</Text>
                            <Text style={styles.BloodgroupTitle}>Blood group</Text>
                        </View>
                        <View style={styles.VerticalLine} />
                        <View style={styles.BloodGroupContainer}>
                            <Text style={styles.Bloodgroup}>27</Text>
                            <Text style={styles.BloodgroupTitle}>Count</Text>
                        </View>
                        <View style={styles.VerticalLine} />
                        <View style={styles.BloodGroupContainer}>
                            <Text style={styles.Bloodgroup}>{distance}</Text>
                            <Text style={styles.BloodgroupTitle}>KM</Text>
                        </View>
                    </View>
                    <View style={styles.Line} />
                </View>
                <Text style={styles.Discription}>The blood you donate gives some another chance at a life. One day that someone may be a close relative, a friend, a loved one, or even you.</Text>
                <Text style={styles.Name}>TimeLine</Text>
                <View style={styles.LastBoxFlex}>
                    <Image source={require("../../Assets/Image/Stick.png")} style={styles.Stick} />
                    <View style={{ gap: 10 }}>
                        <Text style={styles.Bloodgroup}>Saturday, 24 June 2024</Text>
                        <View style={{ flexDirection: "row", gap: 5 }}>
                            <Feather name="droplet" color="#000000" size={20} />
                            <Text style={styles.BloodgroupTitle}>Count</Text>
                        </View>
                        <View style={{ flexDirection: "row", gap: 5 }}>
                            <EvilIcons name="location" color="#000000" size={25} />
                            <Text style={styles.BloodgroupTitle}>Diamond Grove Community Hospital</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.ContinueButton} onPress={() => navigation.navigate('Messanger')}>
                    <Text style={styles.ContinueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default DonorDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
    },
    backButton: {
        marginRight: 10,
    },
    OuterFlex: {
        justifyContent: "center",
        alignItems: "center"
    },
    ProfileImage: {
        width: 129,
        height: 129,
    },
    Name: {
        fontSize: 24,
        fontWeight: "400",
        color: "#090A1B",
    },
    LOcationName: {
        color: "#090A1B",
        fontSize: 18,
        fontWeight: "400",
    },
    BOxFlexContect: {
        flexDirection: "row",
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
    },
    BoxContact: {
        borderColor: "#ABABB4",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    Line: {
        borderColor: "#ABABB4",
        borderWidth: 1,
    },
    Bloodgroup: {
        color: "#000000",
        fontSize: 24,
        fontWeight: "500",
    },
    BloodgroupTitle: {
        color: "#73737B",
        fontSize: 18,
        fontWeight: "400"
    },
    FlexBox: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 20,
    },
    BloodGroupContainer: {
        alignItems: "center",
    },
    VerticalLine: {
        width: 1,
        height: 50,
        backgroundColor: '#ABABB4',
    },
    Discription: {
        color: "#73737B",
        fontSize: 18,
        fontWeight: "400",
        paddingBottom: 20,
    },
    Stick: {
        width: 23,
        height: 117,
    },
    LastBoxFlex: {
        flexDirection: "row",
        gap: 10,
        paddingVertical: 20,
    },
    ContinueButton: {
        width: "100%",
        padding: 10,
        borderRadius: 6,
        backgroundColor: "#DE0A1E",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    ContinueButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "500",
    },
});
