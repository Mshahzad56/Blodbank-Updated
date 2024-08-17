import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = ({ navigation }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={{ gap: 10, paddingTop: 10 }}>
                <Text style={styles.WelcomeText}>Welcome !</Text>
                <Text style={styles.WelcomeTextTop}>Hello there, Sign in to Continue!</Text>
            </View>

            <View style={{ paddingTop: 30, gap: 10 }}>
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
            </View>
            <TouchableOpacity style={styles.ForgotPasswordButton}>
                <Text style={styles.ForgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.ContinueButton}
                onPress={() => navigation.navigate('LoginTwo')}
            >
                <Text style={styles.ContinueButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.AccountButton}>
                <Text style={styles.AccountButtonText}>Don’t have an account?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.RegisterButton}>
                <Text style={styles.RegisterButtonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;

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
    ForgotPassword: {
        color: "#4333FF",
        fontSize: 14,
        fontWeight: "500",
    },
    ForgotPasswordButton: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 20,
    },
    ContinueButton: {
        width: "100%",
        padding: 10,
        borderRadius: 6,
        backgroundColor: "#DE0A1E",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
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
    RegisterButtonText: {
        color: "#73737B",
        fontSize: 17,
        fontWeight: "500",
    },
    RegisterButton: {
        borderColor: "#676A6C",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        justifyContent: "center",
        width: "100%",
        padding: 10,
        alignItems: "center",
    },
});
