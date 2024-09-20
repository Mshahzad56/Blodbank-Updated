import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Compatibility = ({ navigation }) => {
    // Sample data for blood type compatibility
    const bloodTypeData = [
        { bloodType: 'A+', canGiveTo: 'A+, AB+', canReceiveFrom: 'A+, A-, O+, O-' },
        { bloodType: 'O-', canGiveTo: 'Everyone', canReceiveFrom: 'O-' },
        { bloodType: 'B+', canGiveTo: 'B+, AB+', canReceiveFrom: 'B+, B-, O+, O-' },
        { bloodType: 'A+', canGiveTo: 'A+, AB+', canReceiveFrom: 'A+, A-, O+, O-' },
        { bloodType: 'O-', canGiveTo: 'Everyone', canReceiveFrom: 'O-' },
        { bloodType: 'B+', canGiveTo: 'B+, AB+', canReceiveFrom: 'B+, B-, O+, O-' },
        // Add more rows as needed
    ];

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <AntDesign name="left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.title}>Compatibility</Text>
            </View>
            <View style={styles.table}>
                {/* Table Header */}
                <View style={[styles.row, styles.headerRow]}>
                    <Text style={[styles.cell, styles.headerCell]}>Blood Type</Text>
                    <Text style={[styles.cell, styles.headerCell]}>Can Give To</Text>
                    <Text style={[styles.cell, styles.headerCell]}>Can Receive From</Text>
                </View>

                {/* Table Rows */}
                {bloodTypeData.map((item, index) => (
                    <View key={index} style={styles.row}>
                        <Text style={styles.cell}>{item.bloodType}</Text>
                        <Text style={styles.cell}>{item.canGiveTo}</Text>
                        <Text style={styles.cell}>{item.canReceiveFrom}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Compatibility;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF',
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
    table: {
        borderWidth: 1,
        borderColor: '#E21629',
        borderRadius: 10,
        overflow: 'hidden',
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#E21629',
    },
    headerRow: {
        backgroundColor: '#f7f7f7',
    },
    cell: {
        flex: 1,
        padding: 10,
        textAlign: 'center',
        borderRightWidth: 1,
        borderRightColor: '#E21629',
        color: "#000000",
        fontSize: 12,
        fontWeight: "400"
    },
    headerCell: {
        fontWeight: 'bold',
    },
});
