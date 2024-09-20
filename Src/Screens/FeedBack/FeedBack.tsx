import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import TopTabNavigator from './TopTabNavigator';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const FeedBack = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <AntDesign name="left" size={24} color="#0F0C20" />
            </TouchableOpacity>
            <TopTabNavigator />
        </View>
    );
};

export default FeedBack;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
    },
    backButton: {
        marginRight: 10,
        paddingVertical: 20,
    },
});
