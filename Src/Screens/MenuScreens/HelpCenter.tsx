import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Get the screen dimensions
const { height } = Dimensions.get('window');

const HelpCenter = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <AntDesign name="left" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Help Center</Text>
                </View>
                <Image source={require("../../Assets/Image/ImageChat.png")} style={styles.Image} />
                <View style={styles.flexbox}>
                    <Text style={styles.TextHelp}>Need Help ?</Text>
                    <Text style={styles.TextHelp}>24/8/2024</Text>
                </View>
                <Text style={styles.RedText}>Tell us how we can help you</Text>
                <Text style={styles.Discription}>
                    Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class
                </Text>
                <TouchableOpacity style={styles.BoxButton} onPress={() => navigation.navigate('ChatWithUs')}>
                    <Ionicons name="chatbubbles-outline" size={30} color="#E21629" />
                    <Text style={styles.RedText}>Chat with us</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default HelpCenter;

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
    flexbox: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
        marginVertical: 10,
    },
    TextHelp: {
        color: "#000000",
        fontSize: 15,
        fontWeight: "500",
    },
    RedText: {
        color: "#E21629",
        fontSize: 15,
        fontWeight: "500",
        paddingVertical: 10,
        alignSelf: "center"
    },
    Discription: {
        color: "#0B0C1A",
        fontSize: 14,
        fontWeight: "400",
        textAlign: "center",
        marginVertical: 10,
    },
    BoxButton: {
        borderWidth: 1,
        borderColor: "#263238",
        width: "100%",
        height: height * 0.2,
        marginTop: 20,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
    }
});
