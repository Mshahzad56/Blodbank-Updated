import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, StatusBar, TextInput, ScrollView, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { launchImageLibrary } from 'react-native-image-picker';

const ProfileCreate = ({ navigation }) => {
    const [profileImage, setProfileImage] = useState(null);
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [city, setCity] = useState('');
    const [disease, setDisease] = useState('');

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

                <Text style={styles.Name}>Name</Text>
                <View style={styles.TextInputOuter}>
                    <TextInput
                        placeholder='Sumaira'
                        placeholderTextColor={"#544C4C"}
                        style={{ color: "#544C4C" }}
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                <Text style={styles.Name}>Last Name</Text>
                <View style={styles.TextInputOuter}>
                    <TextInput
                        placeholder=' Alam'
                        placeholderTextColor={"#544C4C"}
                        style={{ color: "#544C4C" }}
                        value={mobileNumber}
                        onChangeText={setMobileNumber}
                    />
                </View>

                <Text style={styles.Name}>Mobile Number</Text>
                <View style={styles.TextInputOuter}>
                    <TextInput
                        placeholder='0355448899'
                        placeholderTextColor={"#544C4C"}
                        style={{ color: "#544C4C" }}
                        value={dateOfBirth}
                        onChangeText={setDateOfBirth}
                    />
                </View>

                <Text style={styles.Name}>Select Group</Text>
                <View style={styles.TextInputOuter}>
                    <TextInput
                        placeholder='A+'
                        placeholderTextColor={"#544C4C"}
                        style={{ color: "#544C4C" }}
                        value={city}
                        onChangeText={setCity}
                    />
                </View>

                <Text style={styles.Name}>Gender</Text>
                <View style={styles.TextInputOuter}>
                    <TextInput
                        placeholder='Female'
                        placeholderTextColor={"#544C4C"}
                        style={{ color: "#544C4C" }}
                        value={disease}
                        onChangeText={setDisease}
                    />
                </View>

                <Text style={styles.Name}>CNIC</Text>
                <View style={styles.TextInputOuter}>
                    <TextInput
                        placeholder=''
                        placeholderTextColor={"#544C4C"}
                        style={{ color: "#544C4C" }}
                        value={disease}
                        onChangeText={setDisease}
                    />
                </View>
                <Text style={styles.Name}>Date Of Brith</Text>
                <View style={styles.TextInputOuter}>
                    <TextInput
                        placeholder='11/9/1996'
                        placeholderTextColor={"#544C4C"}
                        style={{ color: "#544C4C" }}
                        value={disease}
                        onChangeText={setDisease}
                    />
                </View>
                <Text style={styles.Name}>City</Text>
                <View style={styles.TextInputOuter}>
                    <TextInput
                        placeholder='Gilgit'
                        placeholderTextColor={"#544C4C"}
                        style={{ color: "#544C4C" }}
                        value={disease}
                        onChangeText={setDisease}
                    />
                </View>
                <Text style={styles.Name}>Any Disease</Text>
                <View style={styles.TextInputOuter}>
                    <TextInput
                        placeholder='GNone'
                        placeholderTextColor={"#544C4C"}
                        style={{ color: "#544C4C" }}
                        value={disease}
                        onChangeText={setDisease}
                    />
                </View>
                <TouchableOpacity
                    style={styles.ContinueButton}
                    onPress={() => navigation.navigate('ProfileView')}
                >
                    <Text style={styles.ContinueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ProfileCreate;

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
