import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const NearbyDonor = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredDonors, setFilteredDonors] = useState([]);
    const navigation = useNavigation();

    const donors = [
        { id: 1, name: 'John Doe', distance: '2.4 km', rating: 4.9, bloodGroup: 'A+' },
        { id: 2, name: 'Jane Smith', distance: '3.1 km', rating: 5.2, bloodGroup: 'O-' },
    ];

    const handleSearch = (query) => {
        setSearchQuery(query);

        if (query.trim() === '') {
            setFilteredDonors([]);
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

    const donorsToDisplay = filteredDonors.length > 0 ? filteredDonors : donors;

    const handleCardPress = (donor) => {
        navigation.navigate('LocationNearBy', { donor });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <AntDesign name="left" size={24} color="#0F0C20" />
                </TouchableOpacity>
                <Text style={styles.screenName}>Nearby Donors</Text>
            </View>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search For donor"
                    placeholderTextColor="#73737B"
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
                <TouchableOpacity style={styles.filterButton}>
                    <Ionicons name="notifications-outline" size={20} color="#000000" />
                </TouchableOpacity>
            </View>

            <Text style={styles.DonorList}>Donor List:</Text>

            <ScrollView>
                {donorsToDisplay.map((donor) => (
                    <TouchableOpacity key={donor.id} onPress={() => handleCardPress(donor)}>
                        <View style={styles.cardContainer}>
                            <Image
                                source={require('../../Assets/Image/Profile.png')}
                                style={styles.profileImage}
                            />
                            <View style={styles.cardDetails}>
                                <Text style={styles.donorName}>{donor.name}</Text>
                                <Text style={styles.distanceText}>Distance: {donor.distance}</Text>
                                <View style={styles.ratingContainer}>
                                    <FontAwesome name="star" size={16} color="#FFD700" />
                                    <Text style={styles.ratingText}>{donor.rating}</Text>
                                </View>
                            </View>
                            <View style={styles.actionContainer}>
                                <TouchableOpacity>
                                    <Text style={styles.Online}>Online</Text>
                                </TouchableOpacity>
                                <ImageBackground style={styles.callButton} source={require('../../Assets/Image/Cover.png')}>
                                    <Text style={styles.bloodGroupText}>{donor.bloodGroup}</Text>
                                </ImageBackground>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default NearbyDonor;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        gap: 70,
    },
    backButton: {
        marginRight: 10,
    },
    screenName: {
        fontSize: 24,
        fontWeight: '500',
        color: '#0F0C20',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 8,
        paddingLeft: 10,
        borderColor: '#E3E3E3',
        borderWidth: 1,
        height: 48,
    },
    searchInput: {
        flex: 1,
        height: 45,
        fontSize: 16,
        color: '#0F0C20',
    },
    filterButton: {
        // backgroundColor: '#E21629',
        // borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        height: 48,
        paddingHorizontal: 15,
    },
    cardContainer: {
        flexDirection: 'row',
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
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        color: "#FFB923",
        fontSize: 15,
        fontWeight: "400",
        marginLeft: 5,
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
    Online: {
        color: "#3FA636",
        fontSize: 15,
        fontWeight: "400",
    },
});
