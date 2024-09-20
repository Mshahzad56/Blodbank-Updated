import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar, TextInput, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DropDownPicker from 'react-native-dropdown-picker';

const SentRequest = ({ navigation }) => {
    // Gender dropdown state
    const [genderOpen, setGenderOpen] = useState(false);
    const [genderValue, setGenderValue] = useState(null);
    const [genderItems, setGenderItems] = useState([
        { label: 'gilgit', value: 'gilgit' },
        { label: 'danyor', value: 'danyor' },
        { label: 'hunza', value: 'hunza' },
    ]);

    // Blood group dropdown state
    const [bloodOpen, setBloodOpen] = useState(false);
    const [bloodValue, setBloodValue] = useState(null);
    const [bloodItems, setBloodItems] = useState([
        { label: 'A+', value: 'a+' },
        { label: 'A-', value: 'a-' },
        { label: 'B+', value: 'b+' },
        { label: 'B-', value: 'b-' },
        { label: 'AB+', value: 'ab+' },
        { label: 'AB-', value: 'ab-' },
        { label: 'O+', value: 'o+' },
        { label: 'O-', value: 'o-' },
    ]);

    // Blood amount dropdown state
    const [amountOpen, setAmountOpen] = useState(false);
    const [amountValue, setAmountValue] = useState(null);
    const [amountItems, setAmountItems] = useState([
        { label: '200 ML', value: '200ml' },
        { label: '300 ML', value: '300ml' },
        { label: '500 ML', value: '500ml' },
    ]);

    return (
        <ScrollView style={{ backgroundColor: "#FFF", flex: 1 }}>
            <View style={styles.Container}>
                <StatusBar backgroundColor="transparent" barStyle="dark-content" />

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                        <AntDesign name="left" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Request Blood</Text>
                </View>

                <Text style={styles.Name}>Your Name</Text>
                <View style={styles.TextInputOuter}>
                    <TextInput placeholder='Select name' placeholderTextColor={"#544C4C"} style={{ color: "#544C4C" }} />
                </View>

                <Text style={styles.Name}>Select Group</Text>
                <DropDownPicker
                    open={bloodOpen}
                    value={bloodValue}
                    items={bloodItems}
                    setOpen={setBloodOpen}
                    setValue={setBloodValue}
                    setItems={setBloodItems}
                    placeholder="Select Blood Group"
                    style={styles.dropdown}
                    dropDownContainerStyle={styles.dropdownContainer}
                />



                <Text style={styles.Name}>Date</Text>
                <View style={styles.TextInputOuter}>
                    <TextInput placeholder='Date' placeholderTextColor={"#544C4C"} style={{ color: "#544C4C" }} />
                </View>
                <Text style={styles.Name}>Amount Of Request Blood</Text>
                <DropDownPicker
                    open={amountOpen}
                    value={amountValue}
                    items={amountItems}
                    setOpen={setAmountOpen}
                    setValue={setAmountValue}
                    setItems={setAmountItems}
                    placeholder="Select Amount"
                    style={styles.dropdown}
                    dropDownContainerStyle={styles.dropdownContainer}
                />
                <Text style={styles.Name}>Hospital Name</Text>
                <View style={styles.TextInputOuter}>
                    <TextInput placeholder='Select hospital' placeholderTextColor={"#544C4C"} style={{ color: "#544C4C" }} />
                </View>

                <Text style={styles.Name}>City</Text>
                <DropDownPicker
                    open={genderOpen}
                    value={genderValue}
                    items={genderItems}
                    setOpen={setGenderOpen}
                    setValue={setGenderValue}
                    setItems={setGenderItems}
                    placeholder="Select City"
                    style={styles.dropdown}
                    dropDownContainerStyle={styles.dropdownContainer}
                />

                <Text style={styles.Name}>Mobile Number</Text>
                <View style={styles.TextInputOuter}>
                    <TextInput placeholder='Type mobile num' placeholderTextColor={"#544C4C"} style={{ color: "#544C4C" }} />
                </View>

                <TouchableOpacity
                    style={styles.ContinueButton}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.ContinueButtonText}>Create Request</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default SentRequest;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#FFF",
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
    Name: {
        color: "#0F0C20",
        fontSize: 16,
        fontWeight: "400",
        marginTop: 10,
    },
    TextInputOuter: {
        borderColor: "#544C4C",
        borderWidth: 1,
        borderRadius: 7,
        marginTop: 5,
        // padding: 10,
    },
    dropdown: {
        backgroundColor: '#FFF',
        borderColor: '#544C4C',
        marginTop: 5,
    },
    dropdownContainer: {
        backgroundColor: '#FFF',
        borderColor: '#544C4C',
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
