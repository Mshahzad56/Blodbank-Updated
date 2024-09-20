import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const maskCardNumber = (cardNumber) => {
    const masked = cardNumber.slice(0, -4).replace(/\d/g, '*');
    return `${masked} ${cardNumber.slice(-4)}`;
};

const AddCard = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { methodName, methodImage } = route.params;

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [cardNumber, setCardNumber] = useState("1234567812343444");
    const [cardHolderName, setCardHolderName] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");

    const handleAddNow = () => {

        if (cardHolderName && cardNumber && expiryDate && cvv) {

            setIsFormSubmitted(true);
        } else {
            alert("Please fill all fields.");
        }
    };

    return (
        <ScrollView style={{ backgroundColor: "#FFF", flex: 1 }}>
            <View style={styles.Container}>
                <View style={styles.NavBar}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.BackButton}>
                        <AntDesign name="left" size={24} color="#FFF" />
                    </TouchableOpacity>
                    <Text style={styles.ScreenName}>Add Card</Text>
                </View>

                {/* Card Section with Background Image */}
                <View style={styles.Content}>
                    <View style={styles.cardWrapper}>
                        <ImageBackground
                            style={styles.card}
                            source={require("../../Assets/Image/CoverCard.png")}
                            imageStyle={styles.cardImageStyle}
                        >
                            <View style={styles.Outer}>
                                <Text style={styles.Number}>{maskCardNumber(cardNumber)}</Text>
                                <View style={styles.FlexCard}>
                                    <View>
                                        <Text style={styles.Cardholdername}>Card holder name</Text>
                                        <Text style={styles.CardholderName}>Sumaira Alam</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.Cardholdername}>Expiry date</Text>
                                        <Text style={styles.CardholderName}>12/30</Text>
                                    </View>
                                    <View style={styles.ImageContainer}>
                                        <Image source={methodImage} style={styles.cardLogo} />
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>

                    <View>
                        <Text style={styles.Enteryourpaymentdetails}>Enter your payment details</Text>
                        <Text style={styles.EnteryContinuing}>
                            By continuing you agree to our <Text style={{ color: "#C53F3F", fontStyle: "italic" }}>Terms</Text>
                        </Text>
                    </View>

                    {/* Form Inputs */}
                    <Text style={styles.heading}>Card Holder Name</Text>
                    <TextInput
                        style={styles.BoxButton}
                        placeholder='Sumaira Alam'
                        placeholderTextColor="#000000"
                        value={cardHolderName}
                        onChangeText={setCardHolderName}
                    />
                    <Text style={styles.heading}>Card Number</Text>
                    <TextInput
                        style={styles.BoxButton}
                        placeholder='1234 0000 8888 77'
                        placeholderTextColor="#000000"
                        value={cardNumber}
                        onChangeText={setCardNumber}
                    />

                    <View style={styles.PlaceholderFlex}>
                        <View style={{ width: "45%" }}>
                            <Text style={styles.heading}>Expiry Date</Text>
                            <TextInput
                                style={styles.BoxButton}
                                placeholder='12/6/2030'
                                placeholderTextColor="#000000"
                                value={expiryDate}
                                onChangeText={setExpiryDate}
                            />
                        </View>
                        <View style={{ width: "50%" }}>
                            <Text style={styles.heading}>CVV</Text>
                            <TextInput
                                style={styles.BoxButton}
                                placeholder='7777'
                                placeholderTextColor="#000000"
                                value={cvv}
                                onChangeText={setCvv}
                            />
                        </View>
                    </View>

                    {/* Conditional Rendering of Buttons */}
                    {!isFormSubmitted ? (
                        <TouchableOpacity
                            style={styles.ContinueButton}
                            onPress={handleAddNow}
                        >
                            <Text style={styles.ContinueButtonText}>Add Now</Text>
                        </TouchableOpacity>
                    ) : (
                        <>
                            <TouchableOpacity
                                style={styles.ContinueButton}
                                onPress={() => navigation.navigate('LoginTwo')}
                            >
                                <Text style={styles.ContinueButtonText}>Update Now</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", paddingTop: 10 }}>
                                <Text style={styles.Cancel}>Cancel</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </View>
            </View>
        </ScrollView>
    );
};

export default AddCard;
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    NavBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E21629',
        height: 80,
        paddingHorizontal: 20,
        justifyContent: 'flex-start',
    },
    BackButton: {
        padding: 10,
    },
    ScreenName: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
    },
    Content: {
        paddingHorizontal: 20,
        marginVertical: 20,
        // alignItems: 'center',
    },
    cardWrapper: {
        width: "100%",
        borderRadius: 10,
        overflow: 'hidden',
    },
    card: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardImageStyle: {
        borderRadius: 10,
    },
    cardLogo: {
        width: 40,
        height: 30,
        resizeMode: 'contain',

    },
    ImageContainer: {
        borderWidth: 1,
        borderColor: '#E4E4E499',
        padding: 5,
        backgroundColor: "#FFF",
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    Cardholdername: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "400",
    },
    CardholderName: {
        color: "#FFF",
        fontSize: 14,
        fontWeight: "700",
    },
    FlexCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
        alignItems: "flex-end",
        alignContent: "flex-end",
        alignSelf: "flex-end"
    },
    Number: {
        fontSize: 22,
        fontWeight: "400",
        color: "#FFF",
        paddingHorizontal: 20,
        letterSpacing: 4,
    },
    Outer: {
        marginTop: 30,
    },
    Enteryourpaymentdetails: {
        color: "#000000",
        fontWeight: "500",
        fontSize: 17,
        marginTop: 20,

    },
    EnteryContinuing: {
        color: "#000000",
        fontSize: 13,
        fontWeight: "400",
        fontStyle: "italic"
    },
    heading: {
        color: "#000000",
        fontSize: 16,
        fontWeight: "700",
        margin: 10,
    },
    BoxButton: {
        backgroundColor: "#F1F1F1",
        color: "#000000",
        borderRadius: 9,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        padding: 10,
        marginBottom: 10,
    },
    NewCard: {
        color: "#000000",
        fontSize: 15,
        fontWeight: "500",
    },
    PlaceholderFlex: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    ContinueButton: {
        width: "100%",
        padding: 10,
        borderRadius: 6,
        backgroundColor: "#DE0A1E",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    ContinueButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "500",
    },
    Cancel: {
        color: "#E21629",
        fontSize: 20,
        fontWeight: "500",

    }
});
