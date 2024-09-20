import { Image, StatusBar, StyleSheet, TextInput, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

// Get the screen height
const { height } = Dimensions.get('window');

const ChatWithUs = ({ navigation }) => {
    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: "#FFF"
        }}>
            <View style={styles.container}>
                <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <AntDesign name="left" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Chat With Us</Text>
                </View>
                <View style={styles.textInputouter}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type your message here..."
                        placeholderTextColor="#999"
                        multiline={true}
                    />
                </View>
                <TouchableOpacity
                    style={styles.ContinueButton}
                    onPress={() => navigation.navigate('HomeScreen')}
                >
                    <Text style={styles.ContinueButtonText}>Send</Text>
                </TouchableOpacity>
                <Image source={require("../../Assets/Image/ImageChat.png")} style={styles.Image} />
            </View>
        </ScrollView>
    );
}

export default ChatWithUs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    backButton: {
        paddingRight: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        flex: 1,
        textAlign: 'center',
        color: '#0F0C20',
    },
    Image: {
        width: "100%",
        height: height * 0.4,
        resizeMode: 'contain',
    },
    textInput: {
        fontSize: 15,
        color: "#000",
    },
    textInputouter: {
        borderWidth: 1,
        borderColor: "#263238",
        width: "100%",
        height: height * 0.2,
        marginTop: 20,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
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
