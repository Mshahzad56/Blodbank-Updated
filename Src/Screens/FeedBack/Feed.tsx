import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import { useNavigation } from '@react-navigation/native';

const Feed = () => {
    const [activeButton, setActiveButton] = useState('Feed'); // State to track active button
    const [donors, setDonors] = useState([
        {
            id: 1,
            name: 'John Doe',
            distance: 'City Hospital Science Lab, Gilgit',
            rating: 4.9,
            bloodGroup: 'A+',
            distanceTimedat: "Time: 2:00PM,17 January 2024",
            image: require('../../Assets/Image/Profile.png')
        },
        {
            id: 2,
            name: 'Jane Smith',
            distance: 'General Hospital, Lahore',
            rating: 4.7,
            bloodGroup: 'B-',
            distanceTimedat: "Time: 3:00PM, 18 January 2024",
            image: require('../../Assets/Image/Profile.png')
        }
    ]);
    const [filteredDonors, setFilteredDonors] = useState(donors);
    const navigation = useNavigation();

    const handleSearch = (query) => {
        if (query.trim() === '') {
            setFilteredDonors(donors);
        } else {
            const sortedDonors = donors
                .filter((donor) =>
                    donor.name.toLowerCase().includes(query.toLowerCase())
                )
                .sort((a, b) => {
                    if (a.name.toLowerCase() === query.toLowerCase()) return -1;
                    if (b.name.toLowerCase() === query.toLowerCase()) return 1;
                    return 0;
                });
            setFilteredDonors(sortedDonors);
        }
    };

    const handleCardPress = (donor) => {
        navigation.navigate('DonorDetails', { donor });
    };

    const handleDecline = (id) => {
        // Remove the donor from the list
        const updatedDonors = donors.filter(donor => donor.id !== id);
        setDonors(updatedDonors);
        setFilteredDonors(updatedDonors);
    };

    const handleDonate = (donor) => {
        // Navigate to donation screen with donor details
        navigation.navigate('DonationScreen', { donor });
    };

    return (
        <View style={styles.container}>


            <ScrollView>
                {filteredDonors.map((donor) => (
                    <TouchableOpacity key={donor.id} onPress={() => handleCardPress(donor)}>
                        <View style={styles.CardOuter}>
                            <View style={styles.cardContainer}>
                                <Image
                                    source={donor.image}
                                    style={styles.profileImage}
                                />
                                <View style={styles.cardDetails}>
                                    <Text style={styles.donorName}>{donor.name}</Text>
                                    <Text style={styles.distanceText}> {donor.distance}</Text>
                                    <Text style={styles.distanceText2}> {donor.distanceTimedat}</Text>
                                </View>
                                <View style={styles.actionContainer}>
                                    <ImageBackground style={styles.callButton} source={require('../../Assets/Image/Cover.png')}>
                                        <Text style={styles.bloodGroupText}>{donor.bloodGroup}</Text>
                                    </ImageBackground>
                                    <TouchableOpacity>
                                        <MaterialCommunityIcons name="arrow-right-top-bold" size={24} color="#707070" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.LINE} />
                            <View style={styles.FlexButtons}>
                                <TouchableOpacity onPress={() => handleDecline(donor.id)}>
                                    <Text style={styles.Decline}>Decline</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleDonate(donor)}>
                                    <Text style={styles.Donate}>Donate Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default Feed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        // padding: 20,
    },

    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    CardOuter: {
        borderRadius: 8,
        backgroundColor: '#F9F9F9',
        marginBottom: 15,
        alignItems: 'center',
        padding: 15,
        borderColor: '#E3E3E3',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    cardDetails: {
        flex: 1,
    },
    donorName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#0F0C20',
    },
    distanceText: {
        fontSize: 15,
        color: '#73737B',
        marginVertical: 5,
        fontWeight: "400",
        width: "60%"
    },
    distanceText2: {
        fontSize: 15,
        color: '#73737B',
        fontWeight: "400",
    },
    actionContainer: {
        alignItems: 'center',
        gap: 10,
    },
    callButton: {
        justifyContent: "center",
        alignItems: "center",
        width: 32,
        height: 37,
        marginLeft: 10,
        overflow: 'hidden',
    },
    bloodGroupText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '400',
    },
    DonorList: {
        color: "#0F0C20",
        fontSize: 18,
        fontWeight: "600",
        paddingBottom: 20,
    },
    LINE: {
        borderColor: "#E3E3E3",
        borderWidth: 1,
        marginVertical: 10,
        width: "100%"
    },
    FlexButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%"
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
});
