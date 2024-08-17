import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Password = ({ navigation }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <View style={styles.container}>
            {/* Header with back icon and screen name */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                    <AntDesign name="left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Password</Text>
            </View>

            <View style={{ gap: 10, paddingTop: 10 }}>
                <Text style={styles.WelcomeText}>Change Password</Text>
                <Text style={styles.WelcomeTextTop}>
                    You’ll be logged out of all sessions except this one to protect your account if anyone is trying to gain access.
                </Text>
                <Text style={styles.WelcomeTextTop}>
                    This password includes a combination of uppercase and lowercase letters, numbers (0), and special characters (@).
                    Feel free to modify it or create your own using a similar pattern to meet the specific requirements. Remember to
                    choose a unique and strong password to enhance the security of your accounts.
                </Text>
            </View>

            <View style={{ paddingTop: 30, gap: 10 }}>
                <TextInput
                    placeholder='Current Password'
                    style={styles.TextInput}
                    placeholderTextColor={"#73737B"}
                />
                <TextInput
                    placeholder='Enter your password'
                    style={styles.TextInput}
                    placeholderTextColor={"#73737B"}
                    secureTextEntry={!passwordVisible}
                />
                <TextInput
                    placeholder='Retype new password'
                    style={styles.TextInput}
                    placeholderTextColor={"#73737B"}
                    secureTextEntry={!passwordVisible}
                />
            </View>

            <TouchableOpacity
                style={styles.ContinueButton}
                onPress={() => navigation.navigate('SettingScreen')}
            >
                <Text style={styles.ContinueButtonText}>Change password</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Password;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,

    },
    backIcon: {
        position: 'absolute',
        left: 0,
        paddingLeft: 10,
    },
    headerTitle: {
        color: "#0F0C20",
        fontSize: 24,
        fontWeight: "500",
        textAlign: 'center',
    },
    WelcomeText: {
        color: "#0F0C20",
        fontSize: 18,
        fontWeight: "500",
    },
    WelcomeTextTop: {
        color: "#73737B",
        fontSize: 12,
        fontWeight: "400",
        marginBottom: 10
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
    ContinueButton: {
        width: "100%",
        padding: 10,
        borderRadius: 6,
        backgroundColor: "#DE0A1E",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    ContinueButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "500",
    },
});

