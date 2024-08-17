import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import StepIndicator from './StepIndicator'; // Adjust the path as necessary

const ConditionsTwo = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
            <View style={styles.Container}>
                <Text style={styles.GiveBlood}>Together, We </Text>
                <Text style={styles.SaveLives}>Save Lives</Text>
                <Text style={styles.Discription}>With every donation, you're not just giving blood, you're giving hope.</Text>
                <View style={{ paddingVertical: 140, }}>
                    <Image source={require("../../Assets/Conditions/Blood.png")} style={styles.IMage} />
                </View>
                <TouchableOpacity style={styles.ContinueButton} onPress={() => navigation.navigate('ConditionsThree')}>
                    <Text style={styles.ContinueButtonText}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.SkipText}>Skip</Text>
                </TouchableOpacity>
                <StepIndicator currentStep={2} />
            </View>
        </SafeAreaView>
    );
};

export default ConditionsTwo;

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
        width: 135,
        height: 183,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",

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
