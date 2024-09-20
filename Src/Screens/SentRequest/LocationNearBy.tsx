import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const LocationNearBy = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.Container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <AntDesign name="left" size={24} color="#0F0C20" />
                </TouchableOpacity>
                <Text style={styles.screenName}>Location</Text>
            </View>
        </View>
    )
}

export default LocationNearBy

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        gap: 70,
    },
    backButton: {
        marginRight: 10,
    },
    screenName: {
        fontSize: 24,
        fontWeight: '500',
        color: '#E21629',
    },
})