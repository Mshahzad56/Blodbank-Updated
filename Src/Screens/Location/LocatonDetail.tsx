import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const LocatonDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { location } = route.params;
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
    return (
        <View style={styles.Container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <View style={styles.Header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.BackButton}>
                    <AntDesign name="left" size={24} color="#000" />
                </TouchableOpacity>
                <View style={styles.HeaderTextContainer}>
                    <Text style={styles.Title}>Blood Bank</Text>
                    <Text style={styles.Hospitle}>Blood Bank Available Hospitals</Text>
                </View>
            </View>


            <View style={styles.shadowBox}>
                <Image
                    source={location.image}
                    style={styles.imageStyle}

                />
                <Text style={styles.YourLocationGilgit}>{location.name}</Text>
                <View style={styles.OuterFlex}>
                    <View style={styles.InnerFlex}>
                        <Fontisto name={"blood-drop"} color="#E21629" size={15} />
                        <Text style={styles.BloodBank}>Blood Bank</Text>
                    </View>
                    <Text style={styles.Ammount}>5000ML</Text>
                </View>
                <View style={styles.InnerFlex}>
                    <EvilIcons name={"location"} color="#0F0C20" size={20} />
                    <Text style={styles.BloodBank}>City hospital river road Gilgit</Text>
                </View>
                <Text style={styles.Available}>Available Blood:</Text>
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
                <Text style={styles.Available}>Do you want to Donate?</Text>
                <View style={styles.OuterFlex}>
                    <TouchableOpacity style={styles.DonateLaterButton}>
                        <Text style={styles.DonateLatertext}>Donate Later</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.DonateNowButton}>
                        <Text style={styles.DonateNowButtontext}>Donate Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LocatonDetail;

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
    BackButton: {
        paddingRight: 10,
    },
    HeaderTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginTop: 10,
    },
    Title: {
        fontSize: 20,
        fontWeight: '500',
        color: "#0F0C20",
        textAlign: 'center',
    },
    Hospitle: {
        color: "#0F0C20",
        fontSize: 14,
        fontWeight: "400",
        textAlign: 'center',
    },
    shadowBox: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 20,
    },
    shadowBoxText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        textAlign: 'center',
    },
    imageStyle: {

        width: 120,
        height: 102,
        borderRadius: 7,
        alignItems: "center",
        alignSelf: "center"

    },
    YourLocationGilgit: {
        color: "#0F0C20",
        fontSize: 20,
        fontWeight: "500",
        alignSelf: "center",
        paddingVertical: 10,
    },
    Available: {
        color: "#0F0C20",
        fontSize: 20,
        fontWeight: "500",
        paddingVertical: 10,
    },
    BloodBank: {
        color: "#73737B",
        fontSize: 15,
        fontWeight: "400",
    },
    InnerFlex: {
        flexDirection: "row",
        gap: 10,
    },
    Ammount: {
        color: "#E21629",
        fontSize: 15,
        fontWeight: "400",
    },
    OuterFlex: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    BloodGroupsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",

        gap: 5,
    },
    BloodNameTwo: {
        color: "#263238",
        fontSize: 14,
        fontWeight: "400",
        textAlign: "center",

    },
    BloodDotTwo: {
        width: 13,
        height: 15,
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
    DonateLaterButton: {
        borderColor: "#484848",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    DonateLatertext: {
        color: "#242424",
        fontSize: 15,
        fontWeight: "400",
    },
    DonateNowButton: {
        backgroundColor: "#E21629",
        borderRadius: 8,
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    DonateNowButtontext: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: "400",
    }

});
