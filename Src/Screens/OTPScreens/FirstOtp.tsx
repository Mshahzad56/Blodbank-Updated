import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FirstOtp = ({ navigation }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(30);
    const [isResendEnabled, setIsResendEnabled] = useState(false);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setIsResendEnabled(true);
        }
    }, [timer]);

    const handleChange = (text, index) => {
        let newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < 3) {
            refs[index + 1].focus();
        }
    };

    const handleSubmit = () => {

        console.log('OTP entered:', otp.join(''));

        navigation.navigate('Questionnaires');
    };

    const handleResend = () => {

        setTimer(30);
        setIsResendEnabled(false);
        console.log('OTP resent');
    };

    const refs = [];

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <AntDesign name="left" color="#000000" size={20} />
            </TouchableOpacity>
            <Text style={styles.title}>Verify your details</Text>
            <Text style={styles.subtitle}>Enter OTP sent to +92 34657881 via SMS</Text>
            <Text style={styles.EnterOTP}>Enter OTP</Text>
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(text) => handleChange(text, index)}
                        value={digit}
                        ref={(ref) => refs[index] = ref}
                    />
                ))}
            </View>
            <View style={styles.FlexBox}>
                <Text style={styles.RecivesOtp}>
                    Didn’t receive OTP?{' '}
                    <TouchableOpacity onPress={handleResend} disabled={!isResendEnabled}>
                        <Text style={{
                            color: isResendEnabled ? "#DE0A1E" : "#73737B", top: 5, fontWeight: "400",
                            fontSize: 18,
                        }}>Resend.</Text>
                    </TouchableOpacity>
                </Text>
                <Text style={styles.Timer}>{`00:${timer < 10 ? `0${timer}` : timer}`}</Text>
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Verify & Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FirstOtp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
    },
    backButton: {
        paddingVertical: 10,
    },
    title: {
        color: "#DE0A1E",
        fontSize: 26,
        fontWeight: "600",
    },
    subtitle: {
        color: "#73737B",
        fontSize: 20,
        fontWeight: "400",
        paddingVertical: 10,
    },
    otpContainer: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        marginVertical: 20,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
    },
    submitButton: {
        width: "100%",
        padding: 10,
        borderRadius: 6,
        backgroundColor: "#DE0A1E",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    submitButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "500",
    },
    EnterOTP: {
        color: "#030401",
        fontSize: 18,
        fontWeight: "400",
    },
    RecivesOtp: {
        color: "#73737B",
        fontWeight: "400",
        fontSize: 18,
    },
    FlexBox: {
        flexDirection: "row",
        gap: 20,
    },
    Timer: {
        color: "#000000",
        fontWeight: "400",
        fontSize: 18,
        marginTop: 5
    }
});
