import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import StepIndicator from './StepIndicator';

const ConditionsOne = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
            <View style={styles.Container}>
                <Text style={styles.GiveBlood}>Give Blood</Text>
                <Text style={styles.SaveLives}>Save Lives</Text>
                <Text style={styles.Discription}>Easy to find available donors nearby verified willing to help.</Text>
                <Image source={require("../../Assets/Conditions/NextHand.png")} style={styles.IMage} />
                <TouchableOpacity style={styles.ContinueButton} onPress={() => navigation.navigate('ConditionsTwo')}>
                    <Text style={styles.ContinueButtonText}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.SkipText}>Skip</Text>
                </TouchableOpacity>
                <StepIndicator currentStep={1} />
            </View>
        </SafeAreaView>
    );
};

export default ConditionsOne;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
    },
    GiveBlood: {
        color: "#DE0A1E",
        fontSize: 26,
        fontWeight: "600",
        paddingTop: 20,
    },
    SaveLives: {
        color: "#544D4E",
        fontSize: 26,
        fontWeight: "600"
    },
    Discription: {
        color: "#8E8E8E",
        fontSize: 16,
        fontWeight: "400",
        width: "90%"
    },
    IMage: {
        width: "90%",
        height: "60%"
    },
    ContinueButton: {
        width: "100%",
        padding: 10,
        borderRadius: 6,
        backgroundColor: "#DE0A1E",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    ContinueButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "500",
    },
    SkipText: {
        color: "#544D4E",
        fontSize: 18,
        fontWeight: "500",
        textAlign: "center",
        paddingVertical: 10,
    }
});
