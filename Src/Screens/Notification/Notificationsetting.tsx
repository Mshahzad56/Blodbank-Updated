import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Switch } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Notificationsetting = ({ navigation }) => {
    const [isSwitchOn1, setIsSwitchOn1] = useState(false);
    const [isSwitchOn2, setIsSwitchOn2] = useState(false);
    const [isSwitchOn3, setIsSwitchOn3] = useState(false);

    const onToggleSwitch1 = () => setIsSwitchOn1(!isSwitchOn1);
    const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);
    const onToggleSwitch3 = () => setIsSwitchOn3(!isSwitchOn3);

    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <AntDesign name="left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.title}>Notification setting</Text>
            </View>
            <Text style={styles.SwitchLabel}>Common</Text>
            <View style={styles.SwitchContainer}>
                <Text style={styles.SwitchLabel}>General Notification</Text>
                <Switch value={isSwitchOn1} onValueChange={onToggleSwitch1} color='#E21629' />
            </View>
            <View style={styles.SwitchContainer}>
                <Text style={styles.SwitchLabel}>Sound</Text>
                <Switch value={isSwitchOn2} onValueChange={onToggleSwitch2} color='#E21629' />
            </View>
            <View style={styles.SwitchContainer}>
                <Text style={styles.SwitchLabel}>Vibrate</Text>
                <Switch value={isSwitchOn3} onValueChange={onToggleSwitch3} color='#E21629' />
            </View>
        </View>
    );
};

export default Notificationsetting;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    SwitchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    SwitchLabel: {
        fontSize: 14,
        color: '#000000',
        fontWeight: "400",

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
});
