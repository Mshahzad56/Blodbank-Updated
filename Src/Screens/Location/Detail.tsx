import { Image, StyleSheet, Text, TouchableOpacity, View, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const Detail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { location } = route.params;

    const [counter, setCounter] = useState(0);
    const [activeButton, setActiveButton] = useState('courier');
    const handleIncrease = () => {
        setCounter(counter + 1);
    };

    const handleDecrease = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    const handleEdit = () => {
        Alert.alert("Edit Address", "This feature is under development.");
        // You can navigate to another screen or open a modal here
        // navigation.navigate('EditAddressScreen'); // Example of navigation
    };

    const handleButtonPress = (button) => {
        setActiveButton(button);
    };

    return (
        <ScrollView>
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.Title}>Detail</Text>
                </View>
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
                <Text style={styles.ContactInfo}>Location</Text>
                <Image source={require("../../Assets/Image/ImageMap.png")} style={styles.MapImage} />
                <View style={styles.OuterFlexBox}>
                    <View style={styles.InnerFlex}>
                        <View style={styles.Box}>
                            <Text style={styles.BloodGroup}>A +</Text>
                        </View>
                        <View>
                            <Text style={styles.BloodType}>Blood Type A</Text>
                            <Text style={styles.Rhesus}>Rhesus <Text style={{ color: "#0F0C20" }}>+</Text></Text>
                        </View>
                    </View>
                    <View style={styles.CounterContainer}>
                        <TouchableOpacity onPress={handleDecrease}>
                            <AntDesign name="minus" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={styles.CounterText}>{counter}</Text>
                        <TouchableOpacity onPress={handleIncrease}>
                            <AntDesign name="plus" size={20} color="#E21629" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.BloodType}>Your Address</Text>
                    <View style={styles.locationTextContainer}>
                        <Entypo name="location-pin" color="#E21629" size={15} />
                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%" }}>
                            <Text style={styles.Rhesus}>Gilgit Jutial, no 339 </Text>
                            <TouchableOpacity style={styles.EditButton} onPress={handleEdit}>
                                <Text style={styles.EditButtonText}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Text style={styles.BloodType}>Select your pick up method</Text>
                <View style={styles.ButtonOuterFlex}>
                    <TouchableOpacity
                        style={[
                            styles.ButtonFlex,
                            activeButton === 'courier' && styles.activeButton
                        ]}
                        onPress={() => handleButtonPress('courier')}
                    >
                        <Text style={[
                            styles.Sendbycourier,
                            activeButton === 'courier' && styles.activeButtonText
                        ]}>Send by courier</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.ButtonFlexTwo,
                            activeButton === 'selfService' && styles.activeButton
                        ]}
                        onPress={() => handleButtonPress('selfService')}
                    >
                        <Text style={[
                            styles.SelfService,
                            activeButton === 'selfService' && styles.activeButtonText
                        ]}>Self Service</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.ContinueButton} onPress={() => navigation.navigate('EmergencyDonor')}>
                    <Text style={styles.ContinueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Detail;

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "#FFF",
        flex: 1,
        paddingHorizontal: 20,
    },
    locationTextContainer: {
        flexDirection: "row",
        alignItems: "center",
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
    },
    YourLocationGilgit: {
        color: "#0F0C20",
        fontSize: 20,
        fontWeight: "500",
    },
    ContactInfo: {
        color: "#0F0C20",
        fontSize: 24,
        fontWeight: "500",
        paddingVertical: 20,
    },
    MapImage: {
        height: 193,
        width: "100%",
        borderRadius: 5,
    },
    Box: {
        backgroundColor: "#E21629",
        padding: 10,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    BloodGroup: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "400"
    },
    BloodType: {
        color: "#0F0C20",
        fontWeight: "500",
        fontSize: 18,
        paddingVertical: 10,
    },
    Rhesus: {
        color: "#73737B",
        fontWeight: "500",
        fontSize: 18,
    },
    InnerFlex: {
        flexDirection: "row",
        gap: 20
    },
    // Counter styles
    CounterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        gap: 20
    },

    CounterText: {
        fontSize: 20,
        fontWeight: "500",
        color: "#0F0C20",
    },
    OuterFlexBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
    },
    EditButton: {
        borderColor: "#ABABB4",
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
    },
    EditButtonText: {
        color: "#E21629",
        fontSize: 14,
        fontWeight: "500",
    },
    ButtonFlex: {
        backgroundColor: "#FFF",
        borderColor: "#E21629",
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        width: "45%",
    },
    ButtonFlexTwo: {
        backgroundColor: "#FFF",
        borderColor: "#E21629",
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        width: "45%",
    },
    activeButton: {
        backgroundColor: "#E21629",
    },
    activeButtonText: {
        color: "#FFF",
    },
    Sendbycourier: {
        color: "#E21629",
        fontSize: 15,
        fontWeight: "500"
    },
    SelfService: {
        color: "#E21629",
        fontSize: 15,
        fontWeight: "500"
    },
    ButtonOuterFlex: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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
