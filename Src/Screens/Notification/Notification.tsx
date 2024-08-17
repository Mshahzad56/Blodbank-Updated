import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

const notifications = [
    {
        id: '1',
        profileImage: require('../../Assets/Image/Profile.png'),
        name: 'John Doe',
        text: 'You got a blood request near jutial area.',
        date: '2024-08-09',
    },
    {
        id: '2',
        profileImage: require('../../Assets/Image/Profile.png'),
        name: 'Jane Smith',
        text: 'You got a blood request near jutial area.',
        date: '2024-08-08',
    },
];

// Function to filter notifications
const filterNotifications = (day) => {
    return notifications.filter((notification) => {
        const notificationDate = moment(notification.date);
        if (day === 'today') {
            return notificationDate.isSame(moment(), 'day');
        } else if (day === 'yesterday') {
            return notificationDate.isSame(moment().subtract(1, 'days'), 'day');
        }
        return false;
    });
};

const Notification = () => {
    const navigation = useNavigation();
    const todayNotifications = filterNotifications('today');
    const yesterdayNotifications = filterNotifications('yesterday');

    const renderNotifications = (notificationList, showRedDot = false) => (
        notificationList.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Profile', { cardDetails: item })}>
                <View style={styles.notificationContainer}>
                    <View style={styles.profileWrapper}>
                        <Image source={item.profileImage} style={styles.profileImage} />
                        {showRedDot && <View style={styles.redDot} />}
                    </View>
                    <View style={styles.notificationDetails}>
                        <View style={styles.flexBox}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.date}>{item.date}</Text>
                        </View>
                        <Text style={styles.text}>{item.text}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        ))
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notification</Text>
            </View>
            <ScrollView>
                <Text style={styles.sectionTitle}>Today</Text>
                {renderNotifications(todayNotifications, true)}

                <Text style={styles.sectionTitle}>Yesterday</Text>
                {renderNotifications(yesterdayNotifications)}
            </ScrollView>
        </View>
    );
};

export default Notification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,

        gap: 50,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '500',
        marginLeft: 16,
        color: "#0F0C20"
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        color: "#0F0C20"
    },
    notificationContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        padding: 12,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
    },
    profileWrapper: {
        position: 'relative',
        marginRight: 12,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    redDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'red',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    notificationDetails: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
        color: "#191724"
    },
    text: {
        fontSize: 13,
        color: '#73737B',
        marginBottom: 4,
        fontWeight: "500"
    },
    date: {
        fontSize: 13,
        color: '#73737B',
        fontWeight: "500"
    },
    flexBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    }
});
