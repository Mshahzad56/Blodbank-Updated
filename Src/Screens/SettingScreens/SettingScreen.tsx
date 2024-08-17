import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';


const SettingScreen = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
        toggleModal();
    };

    const languages = ['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Russian', 'Japanese', 'Chinese'];

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 20 }}>
                <AntDesign name="left" size={24} color="#000" />
            </TouchableOpacity>

            <View style={styles.ProfileFlex}>
                <View style={{ flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "center" }}>
                    <Image source={require("../../Assets/Image/Profile.png")} style={styles.ProfileImage} />
                    <View>
                        <Text style={styles.Name}>Hasnain Karim</Text>
                        <Text style={styles.Number}>162cm,70Kg</Text>
                    </View>
                </View>
                <ImageBackground source={require("../../Assets/Image/Cover.png")} style={styles.CoverImage}>
                    <Text style={styles.BloodGroup}>A +</Text>
                </ImageBackground>
            </View>
            <Text style={styles.Account}>Account</Text>
            <TouchableOpacity style={styles.ProfileButtonoUTER} onPress={() => navigation.navigate('ProfileView')}>
                <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <Octicons name="person" size={24} color="#000000" />
                    <Text style={styles.ProfileButton}>Profile</Text>
                </View>
                <AntDesign name="right" size={24} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ProfileButtonoUTER} onPress={toggleModal}>
                <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <Feather name="globe" size={24} color="#000000" />
                    <Text style={styles.ProfileButton}>App language</Text>
                </View>
                <AntDesign name="right" size={24} color="#000000" />
            </TouchableOpacity>

            <Modal
                isVisible={isModalVisible}
                onBackdropPress={toggleModal}
                style={styles.modal}
                swipeDirection={['down']}
                onSwipeComplete={toggleModal}
            >
                <View style={styles.modalContent}>
                    <View style={{ flexDirection: "row", gap: 10, }}>
                        <TouchableOpacity onPress={toggleModal}>
                            <Entypo name="cross" size={24} color="#000" />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>App language</Text>
                    </View>

                    <ScrollView>
                        {languages.map((language) => (
                            <TouchableOpacity
                                key={language}
                                style={styles.languageOption}
                                onPress={() => selectLanguage(language)}
                            >
                                <View style={styles.radioButtonContainer}>
                                    <RadioButton
                                        value={language}
                                        status={selectedLanguage === language ? 'checked' : 'unchecked'}
                                        onPress={() => selectLanguage(language)}
                                        color='#FF0000'
                                    />
                                    <Text style={styles.languageText}>{language}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </Modal>

            <TouchableOpacity style={styles.ProfileButtonoUTER} onPress={() => navigation.navigate('Password')} >
                <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <Feather name="lock" size={24} color="#000000" />
                    <Text style={styles.ProfileButton}>Password</Text>
                </View>
                <AntDesign name="right" size={24} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ProfileButtonoUTER} onPress={() => navigation.navigate('Invitefriends')}  >
                <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <Octicons name="people" size={24} color="#000000" />
                    <Text style={styles.ProfileButton}>Invite friend</Text>
                </View>
                <AntDesign name="right" size={24} color="#000000" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.LogoutButton}>
                <Text style={styles.LogoutButtonText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingBottom: 20,
    },
    ProfileFlex: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    ProfileImage: {
        width: 84,
        height: 84,
        borderRadius: 50,
    },
    Name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#000000",
    },
    Account: {
        fontSize: 15,
        fontWeight: "500",
        color: "#000000",
        paddingLeft: 20,
        paddingBottom: 20,
    },
    Number: {
        color: "#676A6C",
        fontSize: 15,
        fontWeight: "400",
    },
    CoverImage: {
        width: 35,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    BloodGroup: {
        color: "#FFFFFF",
        fontSize: 13,
        fontWeight: "500"
    },
    ProfileButton: {
        color: "#000000",
        fontSize: 15,
        fontWeight: "400",
    },
    ProfileButtonoUTER: {
        flexDirection: "row",
        backgroundColor: "#F4F4F4",
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        marginBottom: 20,
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        backgroundColor: "#FFF",
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        maxHeight: 400,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 20,
        color: "#000"
    },
    languageOption: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
    },
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    languageText: {
        fontSize: 15,
        color: "#000",
        paddingLeft: 10,
        fontWeight: "400",
    },
    LogoutButton: {
        position: "absolute",
        bottom: 20,
        width: "90%",
        backgroundColor: "#FFF",
        borderColor: "#FF0000",
        borderWidth: 1,
        paddingVertical: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        alignSelf: "center",

    },
    LogoutButtonText: {
        color: "#FF0000",
        fontSize: 15,
        fontWeight: "500",

    }
});

