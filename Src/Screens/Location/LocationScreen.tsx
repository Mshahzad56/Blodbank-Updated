import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

// Sample data array for locations
const locations = [
    {
        id: 1,
        image: require('../../Assets/Image/Location.png'),
        name: 'City Hospital',
        type: 'General Hospital',
        distance: '1.2 Km',
        location: 'Gilgit'
    },
    {
        id: 2,
        image: require('../../Assets/Image/Location.png'),
        name: 'National Clinic',
        type: 'Specialty Clinic',
        distance: '2.5 Km',
        location: 'Gilgit'
    },
    {
        id: 3,
        image: require('../../Assets/Image/Location.png'),
        name: 'City Hospital',
        type: 'General Hospital',
        distance: '1.2 Km',
        location: 'Gilgit'
    },
    {
        id: 4,
        image: require('../../Assets/Image/Location.png'),
        name: 'National Clinic',
        type: 'Specialty Clinic',
        distance: '2.5 Km',
        location: 'Gilgit'
    },


];


const LocationScreen = () => {
    const navigation = useNavigation();

    const handleCardPress = (location) => {
        navigation.navigate('Detail', { location });
    };

    return (
        <ScrollView style={{ flex: 1, height: "100%", backgroundColor: "#FFF" }}>
            <View style={styles.container}>
                <View style={styles.NavOuter}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={30} color="#000" />
                    </TouchableOpacity>
                    <View style={styles.locationContainer}>
                        <Text style={styles.YourLocation}>Your Location</Text>
                        <View style={styles.locationTextContainer}>
                            <Entypo name="location-pin" color="#E21629" size={15} />
                            <Text style={styles.YourLocationGilgit}>Gilgit city, Jutial</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.NearFromYou}>Near From You</Text>

                {/* Map through the locations array to render cards */}
                {locations.map((location) => (
                    <TouchableOpacity key={location.id} onPress={() => handleCardPress(location)}>
                        <View style={styles.CardBox}>
                            <View style={styles.rowContainer}>
                                <Image
                                    source={location.image}
                                    style={styles.imageStyle}
                                    resizeMode="cover"
                                />
                                <View style={styles.hospitalInfo}>
                                    <Text style={styles.YourLocationGilgit}>{location.name}</Text>
                                    <Text style={styles.GeneralHospital}>{location.type}</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ flexDirection: "row", alignItems: 'center', marginRight: 10, gap: 10 }}>
                                            <FontAwesome5 name="people-arrows" color="#0F0C20" size={17} />
                                            <Text style={styles.GeneralHospital}>{location.distance}</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                            <EvilIcons name="location" color="#0F0C20" size={17} />
                                            <Text style={styles.GeneralHospital}>{location.location}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

export default LocationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
    },
    NavOuter: {
        flexDirection: "row",
        alignItems: "center",
        gap: 90
    },
    locationContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    locationTextContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    YourLocation: {
        color: "#73737B",
        fontSize: 18,
        fontWeight: "500",
    },
    YourLocationGilgit: {
        color: "#0F0C20",
        fontSize: 20,
        fontWeight: "500",
    },
    NearFromYou: {
        color: "#0F0C20",
        fontSize: 24,
        fontWeight: "500",
        paddingVertical: 20,
    },
    CardBox: {
        borderColor: "#D5D1D1",
        borderWidth: 1,
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 15,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 102,
        gap: 20,
    },
    imageStyle: {
        height: '100%',
        width: 120,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
    },
    hospitalInfo: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'center',
    },
    GeneralHospital: {
        color: "#73737B",
        fontSize: 15,
        fontWeight: "400",
    }
});
