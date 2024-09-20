import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar, TextInput, ScrollView, Modal, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DropDownPicker from 'react-native-dropdown-picker';

const BloodDonate = ({ navigation }) => {
    // Modal visibility state
    const [modalVisible, setModalVisible] = useState(false);

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

    // Function to handle "Sent" button press
    const handleSentPress = () => {
        setModalVisible(true);
    };

    // useEffect to handle modal visibility and navigation
    useEffect(() => {
        if (modalVisible) {
            const timer = setTimeout(() => {
                setModalVisible(false);
                navigation.navigate('Home'); // Navigate to home screen
            }, 5000); // 5 seconds delay

            return () => clearTimeout(timer);
        }
    }, [modalVisible]);

    return (
        <ScrollView style={{ backgroundColor: "#FFF", flex: 1 }}>
            <View style={styles.Container}>
                <StatusBar backgroundColor="transparent" barStyle="dark-content" />

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                        <AntDesign name="left" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Blood Donate</Text>
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
                    placeholder="select city"
                    style={styles.dropdown}
                    dropDownContainerStyle={styles.dropdownContainer}
                />

                <Text style={styles.Name}>Mobile Number</Text>
                <View style={styles.TextInputOuter}>
                    <TextInput placeholder='Type mobile num' placeholderTextColor={"#544C4C"} style={{ color: "#544C4C" }} />
                </View>

                <TouchableOpacity
                    style={styles.ContinueButton}
                    onPress={handleSentPress}
                >
                    <Text style={styles.ContinueButtonText}>Sent</Text>
                </TouchableOpacity>
            </View>

            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="slide"
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Image source={require("../../Assets/Image/ModalImgOne.png")} style={styles.ModalImage} />
                        <View>
                            <Text style={styles.modalText}>Your Request Has Been </Text>
                            <Text style={styles.modalText}>Successfuly</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

export default BloodDonate;

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
    },
    dropdown: {
        backgroundColor: '#FFF',
        borderColor: '#544C4C',
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        // width: 300,
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    modalText: {
        fontSize: 20,
        color: '#0F0C20',
        fontWeight: "500",
        textAlign: "center",

    },
    ModalImage: {
        height: 418,
        width: 312
    }

});
