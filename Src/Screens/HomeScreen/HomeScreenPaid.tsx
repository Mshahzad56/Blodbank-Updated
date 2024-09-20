import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreenPaid = () => {
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
            hospital: 'Danyor Hospital',
            location: 'Science Lab, Gilgit',
            time: '2:00PM, 17 January 2024',
            bloodType: 'B+',
            profileImage: require('../../Assets/Image/Profile.png'),
            coverImage: require('../../Assets/Image/Cover.png'),
        },
    ]);
    const [cardData2, setCardData2] = useState([
        {
            id: '1',
            bloodGroup: 'A+',
            bloodAmount: '550ML',

        },
        {
            id: '2',
            bloodGroup: 'A+',
            bloodAmount: '550ML',

        },
        {
            id: '3',
            bloodGroup: 'A+',
            bloodAmount: '550ML',

        },
        {
            id: '4',
            bloodGroup: 'A+',
            bloodAmount: '550ML',

        },
        {
            id: '5',
            bloodGroup: 'A+',
            bloodAmount: '550ML',

        },
        {
            id: '6',
            bloodGroup: 'A+',
            bloodAmount: '550ML',

        },
        {
            id: '7',
            bloodGroup: 'A+',
            bloodAmount: '550ML',

        },
        {
            id: '8',
            bloodGroup: 'A+',
            bloodAmount: '550ML',

        },
        {
            id: '9',
            bloodGroup: 'A+',
            bloodAmount: '550ML',

        },

    ]);
    const [isHospitalDropdownVisible, setHospitalDropdownVisible] = useState(false);
    const [selectedHospital, setSelectedHospital] = useState('Select Hospital');
    const [isBloodGroupDropdownVisible, setBloodGroupDropdownVisible] = useState(false);
    const [selectedBloodGroup, setSelectedBloodGroup] = useState('Select Blood Group');



    const navigation = useNavigation();

    const handleDecline = (id) => {
        setCardData(prevData => prevData.filter(card => card.id !== id));
    };

    const handleDonate = (item) => {
        navigation.navigate('Profile', { cardDetails: item });
    };

    const toggleHospitalDropdown = () => {
        setHospitalDropdownVisible(!isHospitalDropdownVisible);
    };

    const toggleBloodGroupDropdown = () => {
        setBloodGroupDropdownVisible(!isBloodGroupDropdownVisible);
    };

    const selectHospital = (hospital: React.SetStateAction<string>) => {
        setSelectedHospital(hospital);
        setHospitalDropdownVisible(false);
    };

    const selectBloodGroup = (bloodGroup: React.SetStateAction<string>) => {
        setSelectedBloodGroup(bloodGroup);
        setBloodGroupDropdownVisible(false);
    };

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.Container}>
                <View style={styles.FlexProfile}>
                    <TouchableOpacity style={{ flexDirection: "row", gap: 10, alignItems: "center" }} onPress={() => navigation.navigate('ProfileView')}>
                        {/* Your profile component */}
                        <Image source={require("../../Assets/Image/Profile.png")} style={styles.ProfileImage} />
                        <Text style={styles.NameKarim}>Hello :Sumaira</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Ionicons name="notifications-outline" size={30} color="#000" />
                    </TouchableOpacity>
                </View>

                <View style={styles.dropdownhospotles}>
                    <Text style={styles.dropwomtext}>{selectedHospital}</Text>
                    <TouchableOpacity onPress={toggleHospitalDropdown}>
                        <Entypo name="location-pin" color="#E21629" size={15} />
                    </TouchableOpacity>
                </View>
                {isHospitalDropdownVisible && (
                    <View style={styles.dropdownMenu}>
                        <TouchableOpacity onPress={() => selectHospital('City Hospital')}>
                            <Text style={styles.dropdownItem}>City Hospital</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => selectHospital('Danyor Hospital')}>
                            <Text style={styles.dropdownItem}>Danyor Hospital</Text>
                        </TouchableOpacity>
                        {/* Add more hospitals as needed */}
                    </View>
                )}

                <View style={styles.dropdownhospotles}>
                    <Text style={styles.dropwomtext}>{selectedBloodGroup}</Text>
                    <TouchableOpacity onPress={toggleBloodGroupDropdown}>
                        <Image source={require("../../Assets/Image/BloodDot.png")} style={styles.BloodDot} />
                    </TouchableOpacity>
                </View>
                {isBloodGroupDropdownVisible && (
                    <View style={styles.dropdownMenu}>
                        <TouchableOpacity onPress={() => selectBloodGroup('A+')}>
                            <Text style={styles.dropdownItem}>A+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => selectBloodGroup('B+')}>
                            <Text style={styles.dropdownItem}>B+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => selectBloodGroup('O+')}>
                            <Text style={styles.dropdownItem}>O+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => selectBloodGroup('AB+')}>
                            <Text style={styles.dropdownItem}>AB+</Text>
                        </TouchableOpacity>
                        {/* Add more blood groups as needed */}
                    </View>
                )}

                <TouchableOpacity
                    style={styles.ContinueButton}

                >
                    <Text style={styles.ContinueButtonText}>Sent Request</Text>
                </TouchableOpacity>
                {/* Your existing content */}
                <Text style={styles.ProfessionText}>What Would You Do?</Text>
                <View style={styles.RowContainer}>
                    <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('BloodDonate')}>
                        <Image source={require("../../Assets/Image/Hand.png")} style={styles.ImageHand} />
                        <Text style={styles.DonateBlood}>Donate Blood</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('SentRequest')}>
                        <Image source={require("../../Assets/Image/BloodDot.png")} style={styles.ImageHand} />
                        <Text style={styles.DonateBlood}>Request Blood</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('EmergencyDonor')}>
                        <Image source={require("../../Assets/Image/Emergency.png")} style={styles.ImageHand} />
                        <Text style={styles.DonateBlood}>Find Donor</Text>
                    </TouchableOpacity>
                </View>
                {/* Active Buttons  */}
                <View style={styles.ActiveButtonsOuter}>
                    <TouchableOpacity style={styles.PaidBlood} onPress={() => navigation.navigate('HomeScreen')}>
                        <Text style={styles.nonPaidText}>Blood Bank</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.BloodButton}>
                        <Text style={styles.PaidText}>Paid Blood</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.ProfessionText}>Available Blood:</Text>
                <View style={styles.BloodGroupsContainer}>
                    {cardData2.map((item) => (
                        <View key={item.id} style={styles.Outerbox}>
                            <View style={{ flexDirection: "row", gap: 10 }}>
                                <Text style={styles.BloodNameTwo}>{item.bloodGroup}</Text>
                                <Image source={require("../../Assets/Image/Cover.png")} style={styles.BloodDotTwo} />
                            </View>
                            <Text style={{ color: "#263238", fontSize: 8, fontWeight: "400" }}>{item.bloodAmount}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.FlexBox}>
                    <Text style={styles.DonationRequest}>Request Blood</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('NearbyDonor')}>
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
                            <View style={{ gap: 10, }}>
                                <ImageBackground source={item.coverImage} style={styles.CoverBlood}>
                                    <Text style={styles.BloodName}>{item.bloodType}</Text>
                                </ImageBackground>
                                <TouchableOpacity onPress={() => navigation.navigate('Invitefriends')}>
                                    <MaterialCommunityIcons name="arrow-right-top-bold" size={24} color={"#707070"} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.LINE} />
                        <View style={styles.FlexButtons}>
                            <TouchableOpacity onPress={() => handleDecline(item.id)}>
                                <Text style={styles.Decline}>Decline</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleDonate(item)}>
                                <Text style={styles.Donate}>Accept</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
                <View style={styles.FlexBox}>
                    <Text style={styles.DonationRequest}>Donation Request</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('BloodDonate')}>
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
                            <View style={{ gap: 10, }}>
                                <ImageBackground source={item.coverImage} style={styles.CoverBlood}>
                                    <Text style={styles.BloodName}>{item.bloodType}</Text>
                                </ImageBackground>
                                <TouchableOpacity onPress={() => navigation.navigate('Invitefriends')}>
                                    <MaterialCommunityIcons name="arrow-right-top-bold" size={24} color={"#707070"} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.LINE} />
                        <View style={styles.FlexButtons}>
                            <TouchableOpacity onPress={() => handleDecline(item.id)}>
                                <Text style={styles.Decline}>Decline</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleDonate(item)}>
                                <Text style={styles.Donate}>Accept</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default HomeScreenPaid;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
        height: "100%",
        paddingTop: 10,
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
    BloodNameTwo: {
        color: "#263238",
        fontSize: 14,
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
    },
    dropdownhospotles: {
        borderColor: "#544C4C",
        padding: 10,
        borderWidth: 1,
        borderRadius: 7,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    dropwomtext: {
        color: "#544C4C",
        fontSize: 14,
        fontWeight: "400",
    },
    BloodDot: {
        width: 22,
        height: 16,
    },
    BloodDotTwo: {
        width: 13,
        height: 15,
    },
    dropdownMenu: {
        backgroundColor: '#FFF',
        borderColor: '#E3E3E3',
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 5,
        padding: 10,
    },
    dropdownItem: {
        paddingVertical: 5,
        color: '#0F0C20',
        fontSize: 16,
        fontWeight: '400',
    },
    Outerbox: {
        borderColor: "#E3E3E3",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        // width: 50,
        // height: 39,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 7,
        backgroundColor: "#fff",
    },

    BloodGroupsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",

        gap: 5,
    },
    ContinueButton: {
        width: "100%",
        padding: 10,
        borderRadius: 6,
        backgroundColor: "#DE0A1E",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",

    },
    ContinueButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "500",
    },
    ActiveButtonsOuter: {
        flexDirection: "row",
        gap: 20,
        marginVertical: 10,
    },
    BloodButton: {
        backgroundColor: "#E21629",
        borderRadius: 8,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    PaidBlood: {
        borderRadius: 8,
        borderColor: "#676767",
        borderWidth: 1,
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    nonPaidText: {
        color: "#424242",
        fontSize: 24,
        fontWeight: "500",
    },
    PaidText: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: "500",
    },
});
