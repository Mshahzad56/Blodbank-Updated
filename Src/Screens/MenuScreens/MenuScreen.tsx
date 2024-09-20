import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView, Modal } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import { RadioButton } from 'react-native-paper';

const { height, width } = Dimensions.get('window');

const MenuScreen = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const languages = [
        { id: '1', name: 'English' },
        { id: '2', name: 'Spanish' },
        { id: '3', name: 'French' },
        { id: '4', name: 'German' },
        { id: '5', name: 'Chinese' },
        { id: '6', name: 'Japanese' },
        { id: '7', name: 'Russian' },
        { id: '8', name: 'Italian' },
        { id: '9', name: 'Portuguese' },
        { id: '10', name: 'Korean' },

    ];

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
        toggleModal();
    };

    return (
        <>
            <ScrollView style={{ backgroundColor: "#FFF", flex: 1 }}>
                <View style={styles.container}>
                    <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                            <AntDesign name="left" size={24} color="#000" />
                        </TouchableOpacity>
                        <Text style={styles.title}>Menu</Text>
                    </View>
                    <TouchableOpacity style={styles.flexBox} onPress={() => navigation.navigate('TermsandConditions')}>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <MaterialCommunityIcons name="note-check-outline" color="#000000" size={28} />
                            <Text style={styles.Availabletext}>Terms & Conditions</Text>
                        </View>
                        <AntDesign name="right" color="#000000" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.flexBox} onPress={() => navigation.navigate('Invitefriends')}>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Octicons name="people" color="#000000" size={28} />
                            <Text style={styles.Availabletext}>Invite friend</Text>
                        </View>
                        <AntDesign name="right" color="#000000" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.flexBox} onPress={() => navigation.navigate('HelpCenter')}>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Feather name="lock" color="#000000" size={28} />
                            <Text style={styles.Availabletext}>Help Center</Text>
                        </View>
                        <AntDesign name="right" color="#000000" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.flexBox} onPress={toggleModal}>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Feather name="globe" color="#000000" size={28} />
                            <Text style={styles.Availabletext}>Language</Text>
                        </View>
                        <AntDesign name="right" color="#000000" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.flexBox} onPress={() => navigation.navigate('ManageAddress')}>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Feather name="log-out" color="#000000" size={28} />
                            <Text style={styles.Availabletext}>Logout</Text>
                        </View>
                        <AntDesign name="right" color="#000000" size={20} />
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Modal for Bottom Sheet */}
            <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={toggleModal}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPressOut={toggleModal}
                >
                    <View style={styles.bottomSheetContainer}>
                        <View style={styles.closeIcon}>
                            <TouchableOpacity onPress={toggleModal} >
                                <AntDesign name="close" size={24} color="#000" />
                            </TouchableOpacity>
                            <Text style={styles.bottomSheetTitle}>App language</Text>
                        </View>
                        <ScrollView style={{ maxHeight: height * 0.4 }}>
                            {languages.map((item) => (
                                <TouchableOpacity
                                    key={item.id}
                                    style={styles.languageOption}
                                    onPress={() => selectLanguage(item.name)}
                                >
                                    <RadioButton
                                        value={item.name}
                                        status={selectedLanguage === item.name ? 'checked' : 'unchecked'}
                                        color='#FF0000'
                                        onPress={() => selectLanguage(item.name)}
                                    />
                                    <Text style={styles.languageText}>{item.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </TouchableOpacity>
            </Modal>
        </>
    );
};

export default MenuScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
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
    Availabletext: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '400',
    },
    flexBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: height * 0.01,
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#F5F5F5',
        paddingVertical: height * 0.015,
        borderRadius: 8,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    bottomSheetContainer: {
        backgroundColor: 'white',
        padding: 16,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    closeIcon: {
        flexDirection: "row",
        gap: 10,
    },
    bottomSheetTitle: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 16,
        color: "#000000",
    },
    languageOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        gap: 5,
    },
    languageText: {
        fontSize: 16,
        fontWeight: "400",
        color: "#000000",
    },
});
