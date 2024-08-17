import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginTwo = ({ navigation }) => { // Corrected here
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={{ gap: 10, paddingTop: 10 }}>
                <Text style={styles.WelcomeText}>Create an account!</Text>
                <Text style={styles.WelcomeTextTop}>Please enter your details</Text>
            </View>

            <View style={{ paddingTop: 30, gap: 10 }}>
                <Text style={styles.Emailorphonenumber}>Name</Text>
                <TextInput
                    placeholder='Enter your name'
                    style={styles.TextInput}
                    placeholderTextColor={"#73737B"}
                />
                <Text style={styles.Emailorphonenumber}>Email or phone number</Text>
                <TextInput
                    placeholder='Email or phone number'
                    style={styles.TextInput}
                    placeholderTextColor={"#73737B"}
                />

                <Text style={styles.Emailorphonenumber}>Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        placeholder='Enter your password'
                        style={{ color: "#73737B" }}
                        placeholderTextColor={"#73737B"}
                        secureTextEntry={!passwordVisible}
                    />
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => setPasswordVisible(!passwordVisible)}
                    >
                        <Ionicons
                            name={passwordVisible ? "eye-off" : "eye"}
                            size={24}
                            color="#73737B"
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.Emailorphonenumber}>Confirm password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        placeholder='Enter your confirm password'
                        style={{ color: "#73737B" }}
                        placeholderTextColor={"#73737B"}
                        secureTextEntry={!passwordVisible}
                    />
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => setPasswordVisible(!passwordVisible)}
                    >
                        <Ionicons
                            name={passwordVisible ? "eye-off" : "eye"}
                            size={24}
                            color="#73737B"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.ContinueButton} onPress={() => navigation.navigate('FirstOtp')}>
                <Text style={styles.ContinueButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.AccountButton}>
                <Text style={styles.AccountButtonText}>Already have an account?</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginTwo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
    },
    WelcomeText: {
        color: "#DE0A1E",
        fontSize: 26,
        fontWeight: "600",
    },
    WelcomeTextTop: {
        color: "#73737B",
        fontSize: 20,
        fontWeight: "400",
    },
    Emailorphonenumber: {
        color: "#0B1024",
        fontSize: 16,
        fontWeight: "500",
    },
    TextInput: {
        borderColor: "#E3E3E3",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        color: "#73737B",
        width: "100%",

    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "#E3E3E3",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        width: "100%",
    },
    iconContainer: {
        padding: 10,
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
    AccountButton: {
        paddingVertical: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    AccountButtonText: {
        color: "#030401",
        fontSize: 17,
        fontWeight: "500",
    },
});
