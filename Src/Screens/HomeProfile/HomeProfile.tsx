import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, StatusBar, TextInput, ScrollView, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { launchImageLibrary } from 'react-native-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';

const HomeProfile = ({ navigation }) => {
    const [profileImage, setProfileImage] = useState(null);
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [city, setCity] = useState('');
    const [disease, setDisease] = useState('');

    const [genderOpen, setGenderOpen] = useState(false);
    const [genderValue, setGenderValue] = useState(null);
    const [genderItems, setGenderItems] = useState([
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
    ]);

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

    const uploadProfilePicture = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode);
            } else if (response.assets && response.assets.length > 0) {
                const source = { uri: response.assets[0].uri };
                setProfileImage(source);
            }
        });
    };

    const handleContinue = () => {
        if (
            profileImage &&
            name.trim() !== '' &&
            mobileNumber.trim() !== '' &&
            bloodValue !== null &&
            genderValue !== null &&
            dateOfBirth.trim() !== '' &&
            city.trim() !== '' &&
            disease.trim() !== ''
        ) {
            navigation.navigate('Successfull');
        } else {
            Alert.alert('Error', 'Please fill all the fields and upload a profile picture.');
        }
    };

    return (
        <ScrollView>
            <View style={styles.Container}>
                <StatusBar backgroundColor="transparent" barStyle="dark-content" />

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                        <AntDesign name="left" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Profile Create</Text>
                </View>

                <View style={styles.CircleImage}>
                    {profileImage && (
                        <Image source={profileImage} style={styles.imageStyle} />
                    )}
                    <TouchableOpacity style={styles.cameraIcon} onPress={uploadProfilePicture}>
                        <AntDesign name="camera" size={30} color="#73737B" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.Name}>Your Name</Text>
                <View style={styles.TextInputOuter}>
                    <TextInput
                        placeholder=''
                        placeholderTextColor={"#544C4C"}
                        style={{ color: "#544C4C" }}
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                <Text style={styles.Name}>Mobile Number</Text>
                <View style={styles.TextInputOuter}>
                    <TextInput
                        placeholder=''
                        placeholderTextColor={"#544C4C"}
                        style={{ color: "#544C4C" }}
                        value={mobileNumber}
                        onChangeText={setMobileNumber}
                    />
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

                <Text style={styles.Name}>Date Of Birth</Text>
                <View style={styles.TextInputOuter}>
                    <TextInput
                        placeholder=''
                        placeholderTextColor={"#544C4C"}
                        style={{ color: "#544C4C" }}
                        value={dateOfBirth}
                        onChangeText={setDateOfBirth}
                    />
                </View>

                <Text style={styles.Name}>City</Text>
                <View style={styles.TextInputOuter}>
                    <TextInput
                        placeholder=''
                        placeholderTextColor={"#544C4C"}
                        style={{ color: "#544C4C" }}
                        value={city}
                        onChangeText={setCity}
                    />
                </View>

                <Text style={styles.Name}>Gender</Text>
                <DropDownPicker
                    open={genderOpen}
                    value={genderValue}
                    items={genderItems}
                    setOpen={setGenderOpen}
                    setValue={setGenderValue}
                    setItems={setGenderItems}
                    placeholder="Select Gender"
                    style={[
                        styles.dropdown,
                        genderOpen ? { marginTop: 10 } : { marginTop: 0 },
                    ]}
                    dropDownContainerStyle={styles.dropdownContainer}
                />

                <Text style={styles.Name}>Any Disease</Text>
                <View style={styles.TextInputOuter}>
                    <TextInput
                        placeholder=''
                        placeholderTextColor={"#544C4C"}
                        style={{ color: "#544C4C" }}
                        value={disease}
                        onChangeText={setDisease}
                    />
                </View>

                <TouchableOpacity
                    style={styles.ContinueButton}
                    onPress={handleContinue}
                >
                    <Text style={styles.ContinueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default HomeProfile;

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
    CircleImage: {
        borderColor: "#E21629",
        borderWidth: 2,
        width: 171,
        height: 171,
        borderRadius: 85.5,
        justifyContent: "center",
        alignSelf: "center",
        position: 'relative',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 100,
        position: "absolute"
    },
    cameraIcon: {
        right: -120,
        bottom: -60,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
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
});
