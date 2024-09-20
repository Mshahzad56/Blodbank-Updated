import { ScrollView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const paymentMethods = [
    { id: 1, name: 'MasterCard', image: require('../../Assets/Image/Card.png') },
    { id: 2, name: 'JazzCash', image: require('../../Assets/Image/JazzCash.png') },
    { id: 3, name: 'easypaisa', image: require('../../Assets/Image/easypaisa.png') },
    { id: 4, name: 'VISA', image: require('../../Assets/Image/VIVA.png') },
];

const PaymentMethod = () => {
    const navigation = useNavigation();


    const handlePress = (method) => {
        navigation.navigate('AddCard', {
            methodId: method.id,
            methodName: method.name,
            methodImage: method.image,
        });
    };

    return (
        <ScrollView style={styles.Container}>
            {/* StatusBar */}
            <StatusBar barStyle="light-content" backgroundColor="#E21629" />

            {/* Navigation with back icon */}
            <View style={styles.NavBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={24} color="#FFF" />
                </TouchableOpacity>
                <Text style={styles.ScreenName}>Payment Method</Text>
            </View>

            <View style={styles.MainContainer}>
                {/* Credit & Debit Card Section */}
                <View style={styles.ContainerInner}>
                    <Text style={styles.heading}>Credit & Debit Card</Text>
                    <TouchableOpacity style={styles.BoxButton}>
                        <AntDesign name="creditcard" size={24} color="#E21629" />
                        <Text style={styles.NewCard}>Add New Card</Text>
                    </TouchableOpacity>
                </View>

                {/* More Payment Methods */}
                <Text style={styles.heading}>More Payment Methods</Text>
                <View>
                    {paymentMethods.map((method) => (
                        <TouchableOpacity key={method.id} style={styles.Box} onPress={() => handlePress(method)}>
                            <View style={styles.PaymentCard}>
                                <View style={styles.ImageContainer}>
                                    <Image source={method.image} style={styles.PaymentImage} />
                                </View>
                                <Text style={styles.PaymentName}>{method.name}</Text>
                                <AntDesign name="right" size={20} color="#000" style={styles.RightIcon} />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

            </View>
        </ScrollView>
    );
};

export default PaymentMethod;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    NavBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 80,
        backgroundColor: '#E21629',
    },
    ScreenName: {
        position: 'absolute',
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 24,
        color: '#FFF',
        fontWeight: '500',
    },
    ContainerInner: {
        marginTop: 10,
    },
    heading: {
        color: "#000000",
        fontSize: 16,
        fontWeight: "700"
    },
    BoxButton: {
        backgroundColor: "#F1F1F1",
        paddingHorizontal: 10,
        borderRadius: 9,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingVertical: 5,
        marginVertical: 20,
    },
    NewCard: {
        color: "#000000",
        fontSize: 15,
        fontWeight: "500",
    },
    MainContainer: {
        paddingHorizontal: 20,
    },
    Box: {
        borderColor: "#E21629",
        borderWidth: 1,
        marginVertical: 10,
        padding: 10,
    },
    PaymentCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ImageContainer: {
        borderWidth: 1,
        borderColor: '#E4E4E499',
        padding: 5,
    },
    PaymentImage: {
        width: 40,
        height: 30,
        resizeMode: 'contain',
    },
    PaymentName: {
        fontSize: 16,
        fontWeight: '500',
        flex: 1,
        marginLeft: 10,
        color: "#000",
    },
    RightIcon: {
        marginLeft: 10,
    },

});
