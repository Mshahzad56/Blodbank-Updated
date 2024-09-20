import React, { useRef, useState } from 'react';
import { Animated, Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, StatusBar, ImageBackground, ScrollView, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { height: screenHeight } = Dimensions.get('window');

const DOnor = ({ navigation }) => {
    const bottomSheetHeight = useRef(new Animated.Value(0)).current;
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredDonors, setFilteredDonors] = useState([]);


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
        navigation.navigate('DonorDetails', { donor });
    };
    const openBottomSheet = () => {
        Animated.timing(bottomSheetHeight, {
            toValue: 200,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    React.useEffect(() => {
        openBottomSheet();
    }, []);

    return (
        <SafeAreaView style={styles.Container}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <View style={styles.BackgroundContainer}>
                <ImageBackground
                    source={require("../../Assets/Image/ImageMap.png")}
                    style={[styles.BackgroundImage, { height: screenHeight }]}
                >
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                            <AntDesign name="left" size={24} color="#000" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Location</Text>
                    </View>
                </ImageBackground>
            </View>
            <Animated.View style={[styles.bottomSheet, { height: bottomSheetHeight }]}>
                <TouchableOpacity onPress={() => navigation.navigate('NearbyDonor')}>
                    <Text style={styles.MoreButton}>See More</Text>
                </TouchableOpacity>
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
                                    <Text style={styles.distanceText}> {donor.distance}</Text>
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
            </Animated.View>

        </SafeAreaView>
    );
};

export default DOnor;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    BackgroundContainer: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 24,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
    },
    backIcon: {
        position: 'absolute',
        left: 10,
    },
    headerTitle: {
        color: "#E21629",
        fontSize: 24,
        fontWeight: "500",
        textAlign: 'center',
        marginHorizontal: 30,
    },
    BackgroundImage: {
        width: "100%",
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    bottomSheet: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFF',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },

    MoreButton: {
        color: "#0F0C20",
        fontSize: 18,
        fontWeight: "400",
        paddingBottom: 20,
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

    bloodGroupButton: {

        justifyContent: "center",
        alignItems: "center",
        width: 32,
        height: 37,
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
});
