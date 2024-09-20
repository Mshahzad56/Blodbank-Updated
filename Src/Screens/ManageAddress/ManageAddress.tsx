import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

const ManageAddress = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <AntDesign name="left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.title}>Manage Address</Text>
            </View>
            <Text style={styles.textdescription}>Add multiple location where you can travel to donate</Text>

            <TouchableOpacity style={styles.OuterFlex} onPress={() => alert('Location selected')}>
                <TextInput placeholder='Gilgit' placeholderTextColor={"#676A6C"} style={{ color: "#676A6C", flex: 1 }} />
                <TouchableOpacity style={styles.Homebutton}>
                    <Text style={styles.BittonText}>Home</Text>
                </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity style={styles.OuterFlex} onPress={() => alert('Location selected')}>
                <TextInput placeholder='Hunza,' placeholderTextColor={"#676A6C"} style={{ color: "#676A6C", flex: 1 }} />
                <TouchableOpacity style={styles.Homebutton}>
                    <Text style={styles.BittonText}>Work place</Text>
                </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ContinueButton} onPress={() => navigation.navigate('ProfileView')}>
                <Text style={styles.ContinueButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ManageAddress

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
    textdescription: {
        color: "#676A6C",
        fontSize: 18,
        fontWeight: "400",
    },
    Homebutton: {
        backgroundColor: "#E21629",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        marginLeft: 10,
    },
    BittonText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "400",
    },
    OuterFlex: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "#F1F1F1",
        borderRadius: 7,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: "#FFF",
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
