import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const [cardData, setCardData] = useState([
        {
            id: '1',
            name: 'Karim',
            hospital: 'City Hospital',
            location: 'Science Lab, Gilgit',
            time: '2:00PM, 17 January 2024',
            bloodType: 'A+',
            profileImage: require('../../Assets/Image/Profile.png'),
            coverImage: require('../../Assets/Image/Cover.png'),
        },
        {
            id: '2',
            name: 'Karim',
            hospital: 'City Hospital',
            location: 'Science Lab, Gilgit',
            time: '2:00PM, 17 January 2024',
            bloodType: 'A+',
            profileImage: require('../../Assets/Image/Profile.png'),
            coverImage: require('../../Assets/Image/Cover.png'),
        },
        {
            id: '3',
            name: 'Karim',
            hospital: 'danyor Hospital',
            location: 'Science Lab, Gilgit',
            time: '2:00PM, 17 January 2024',
            bloodType: 'B+',
            profileImage: require('../../Assets/Image/Profile.png'),
            coverImage: require('../../Assets/Image/Cover.png'),
        },
    ]);

    const navigation = useNavigation();

    const handleDecline = (id) => {
        console.log(`Decline pressed for card id: ${id}`);
        // Remove the declined card from the list
        setCardData(prevData => prevData.filter(card => card.id !== id));
        // Add any additional logic needed for declining a card here
    };

    const handleDonate = (item) => {
        console.log(`Donate pressed for card id: ${item.id}`);
        // Navigate to Profile screen with card details
        navigation.navigate('Profile', { cardDetails: item });
    };

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.Container}>
                <View style={styles.FlexProfile}>
                    <View>
                        <Text style={styles.Goodmorning}>Good morning</Text>
                        <Text style={styles.Name}>Hasnain Karim</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Ionicons name="notifications-outline" size={30} color="#000" />
                    </TouchableOpacity>
                </View>

                <View style={styles.BoxTop}>
                    <View style={styles.TextContainer}>
                        <Text style={styles.CardText}>Are You Qualified to Donate Blood?</Text>
                        <TouchableOpacity style={styles.BoxButton}>
                            <Text style={styles.BoxButtonText}>See Terms and Conditions</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={require('../../Assets/Image/Image.png')} style={styles.Image} resizeMode="contain" />
                </View>
                <Text style={styles.ProfessionText}>What Would You Do?</Text>
                <View style={styles.RowContainer}>
                    <View style={styles.Box}>
                        <Image source={require("../../Assets/Image/Hand.png")} style={styles.ImageHand} />
                        <Text style={styles.DonateBlood}>Donate Blood</Text>
                    </View>
                    <View style={styles.Box}>
                        <Image source={require("../../Assets/Image/BloodDot.png")} style={styles.ImageHand} />
                        <Text style={styles.DonateBlood}>Request Blood</Text>
                    </View>
                    <View style={styles.Box}>
                        <Image source={require("../../Assets/Image/Emergency.png")} style={styles.ImageHand} />
                        <Text style={styles.DonateBlood}>Emergency Donors</Text>
                    </View>
                </View>
                <View style={styles.FlexBox}>
                    <Text style={styles.DonationRequest}>Donation Request</Text>
                    <TouchableOpacity>
                        <Text style={styles.Seeall}>See all</Text>
                    </TouchableOpacity>
                </View>
                {cardData.map((item) => (
                    <View key={item.id} style={styles.Boxdotmap}>
                        <View style={styles.profileflex}>
                            <Image source={item.profileImage} style={styles.ProfileImage} />
                            <View style={styles.CardDetails}>
                                <Text style={styles.NameKarim}>{item.name}</Text>
                                <Text style={styles.CityHospital}>{item.hospital}</Text>
                                <Text style={styles.CityHospital}>{item.location}</Text>
                                <Text style={styles.CityHospital}>{item.time}</Text>
                            </View>
                            <ImageBackground source={item.coverImage} style={styles.CoverBlood}>
                                <Text style={styles.BloodName}>{item.bloodType}</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.LINE} />
                        <View style={styles.FlexButtons}>
                            <TouchableOpacity onPress={() => handleDecline(item.id)}>
                                <Text style={styles.Decline}>Decline</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleDonate(item)}>
                                <Text style={styles.Donate}>Donate Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
        height: "100%"
    },
    Goodmorning: {
        color: "#73737B",
        fontSize: 16,
        fontWeight: "400",
    },
    FlexProfile: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    Name: {
        color: "#0F0C20",
        fontSize: 18,
        fontWeight: "500",
    },
    BoxTop: {
        backgroundColor: "#E21629",
        borderRadius: 8,
        width: "100%",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
    },
    TextContainer: {
        flex: 1,
        marginRight: 10,
    },
    CardText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 10,
    },
    BoxButtonText: {
        color: "#000000",
        fontSize: 15,
        fontWeight: "400",
    },
    BoxButton: {
        backgroundColor: "#FFF",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        alignSelf: "flex-start",
    },
    Image: {
        width: 100,
        height: 100,
    },
    ProfessionText: {
        color: "#0F0C20",
        fontSize: 24,
        fontWeight: "500",
        paddingVertical: 10,
    },
    RowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    Box: {
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 8,
        borderColor: "#E21629",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    ImageHand: {
        width: 63,
        height: 46,
        marginBottom: 10,
    },
    DonateBlood: {
        color: "#0F0C20",
        fontSize: 12,
        fontWeight: "400",
        textAlign: "center",
    },
    DonationRequest: {
        color: "#0F0C20",
        fontSize: 24,
        fontWeight: "500",
    },
    Seeall: {
        color: "#676A6C",
        fontSize: 18,
        fontWeight: "400",
    },
    FlexBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
    },
    Boxdotmap: {
        borderColor: "#E3E3E3",
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
    LINE: {
        borderColor: "#E3E3E3",
        borderWidth: 1,
        marginVertical: 10,
    },
    FlexButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    Decline: {
        color: "#676A6C",
        fontWeight: "400",
        fontSize: 15,
    },
    Donate: {
        color: "#E21629",
        fontWeight: "400",
        fontSize: 15,
    }
});
