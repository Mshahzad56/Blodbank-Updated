import React, { useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, ImageBackground, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';

const Profile = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { cardDetails } = route.params;

    const startVoiceCall = useCallback(() => {
        try {
            // Navigate to the VoiceCallScreen
            navigation.navigate('VoiceCall', { callerDetails: cardDetails });
        } catch (error) {
            console.error("Navigation failed: ", error);
        }
    }, [navigation, cardDetails]);

    const startVideoCall = useCallback(() => {
        try {
            // Navigate to the VideoCallScreen
            navigation.navigate('VideoCall', { callerDetails: cardDetails }); // Ensure 'VideoCall' screen is correctly set up
        } catch (error) {
            console.error("Navigation failed: ", error);
        }
    }, [navigation, cardDetails]);

    return (
        <ScrollView>
            <View style={styles.Container}>
                <StatusBar backgroundColor="transparent" barStyle="dark-content" />
                <View style={styles.Header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={30} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.Title}>Help Us</Text>
                </View>
                <View key={cardDetails.id} style={styles.Boxdotmap}>
                    <View style={styles.profileflex}>
                        <Image source={cardDetails.profileImage} style={styles.ProfileImage} />
                        <View style={styles.CardDetails}>
                            <Text style={styles.NameKarim}>{cardDetails.name}</Text>
                            <Text style={styles.CityHospital}>{cardDetails.hospital}</Text>
                            <Text style={styles.CityHospital}>{cardDetails.location}</Text>
                            <Text style={styles.CityHospital}>{cardDetails.time}</Text>
                        </View>
                        <ImageBackground source={cardDetails.coverImage} style={styles.CoverBlood}>
                            <Text style={styles.BloodName}>{cardDetails.bloodType}</Text>
                        </ImageBackground>
                    </View>
                </View>
                <View style={styles.Boxdotmap}>
                    <View style={styles.RowFlex}>
                        <MaterialCommunityIcons name={"blood-bag"} size={30} color={"#F40D0D"} />
                        <Text style={styles.RequiredDiscription}>I need blood with type <Text style={styles.BloodNameTwo}>A positive </Text>A positive urgently for my mother, I hope you can help me</Text>
                    </View>
                </View>
                <Text style={styles.ContactInfo}>Contact Info</Text>
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
                <Text style={styles.ContactInfo}>Location</Text>
                <Image source={require("../../Assets/Image/ImageMap.png")} style={styles.MapImage} />
                <View style={styles.AmountOuter}>
                    <Text style={styles.AmountBags}>Amount Bags:</Text>
                    <Text style={styles.AmountBagsoutput}>400 ML</Text>
                </View>
                <View style={styles.AmountOuter}>
                    <Text style={styles.AmountBags}>Status:</Text>
                    <Text style={styles.Amountstatus}>Status:</Text>
                </View>
                <TouchableOpacity style={styles.ContinueButton} onPress={() => navigation.navigate('LocationScreen')}>
                    <Text style={styles.ContinueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};



const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
    },
    Header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    Title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
        marginRight: 30,
        color: "#0F0C20"
    },
    Boxdotmap: {
        borderColor: "#E3E3E3",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    BoxContact: {
        borderColor: "#ABABB4",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    profileflex: {
        flexDirection: "row",
        alignItems: "center",
    },
    ProfileImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
    },
    CardDetails: {
        flex: 1,
    },
    NameKarim: {
        color: "#0F0C20",
        fontSize: 18,
        fontWeight: "500",
    },
    CityHospital: {
        color: "#73737B",
        fontSize: 15,
        fontWeight: "400",
    },
    CoverBlood: {
        width: 32,
        height: 37,
        justifyContent: "center",
        alignItems: "center",
    },
    BloodName: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "400",
        textAlign: "center",
    },
    RequiredDiscription: {
        color: "#73737B",
        fontSize: 15,
        fontWeight: "500",
    },
    RowFlex: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
    },
    BloodNameTwo: {
        color: "#E21629",
        fontSize: 15,
        fontWeight: "500",
    },
    ContactInfo: {
        color: "#0F0C20",
        fontSize: 24,
        fontWeight: "500",
        paddingVertical: 20,
    },
    BOxFlexContect: {
        flexDirection: "row",
        gap: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    MapImage: {
        height: 193,
        width: "100%",
        borderRadius: 5,
    },
    AmountBags: {
        color: "#0F0C20",
        fontSize: 18,
        fontWeight: "500",
    },
    AmountBagsoutput: {
        color: "#E21629",
        fontSize: 18,
        fontWeight: "400",
    },
    AmountOuter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        paddingVertical: 10,
    },
    Amountstatus: {
        color: "#0F0C20",
        fontSize: 18,
        fontWeight: "400",
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

export default Profile;
