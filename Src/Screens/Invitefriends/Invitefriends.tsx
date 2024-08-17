import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Modal from 'react-native-modal';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Invitefriends = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const contacts = [
        { name: 'Ayan', phone: '03564789512' },
        { name: 'John', phone: '0123456789' },
        { name: 'Jane', phone: '9876543210' },
        // Add more contacts here
    ];

    function alert(arg0: string): void {
        throw new Error('Function not implemented.');
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#FFF" }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                        <AntDesign name="left" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Invite friends</Text>
                </View>

                <TouchableOpacity style={styles.ShareBoxFlex} onPress={toggleModal}>
                    <View style={styles.ShareBox}>
                        <Entypo name="share" color="#FFFFFF" size={24} />
                    </View>
                    <Text style={styles.sharelink}>share link</Text>
                </TouchableOpacity>

                <Modal
                    isVisible={isModalVisible}
                    onBackdropPress={toggleModal}
                    style={styles.modal}
                >

                    <View style={styles.ModalContainer}>
                        <View style={styles.ShareBoxFlex} >
                            <View style={styles.ShareBox}>
                                <Entypo name="share" color="#FFFFFF" size={24} />
                            </View>
                            <Text style={styles.sharelink}>share link</Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.modalContent}>
                            <TouchableOpacity style={styles.option} onPress={() => alert('Share via WhatsApp')}>
                                <FontAwesome name="whatsapp" size={24} color="#25D366" />
                                <Text style={styles.optionText}>WhatsApp</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.option} onPress={() => alert('Share via Instagram')}>
                                <FontAwesome name="instagram" size={24} color="#E4405F" />
                                <Text style={styles.optionText}>Instagram</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.option} onPress={() => alert('Share via Facebook')}>
                                <FontAwesome name="facebook" size={24} color="#1877F2" />
                                <Text style={styles.optionText}>Facebook</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.option} onPress={() => alert('Share via Messenger')}>
                                <Fontisto name="messenger" size={24} color="#880BEA" />
                                <Text style={styles.optionText}>Messenger</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.option} onPress={() => alert('Copy Link')}>
                                <Feather name="copy" size={24} color="#000" />
                                <Text style={styles.optionText}>Copy Link</Text>
                            </TouchableOpacity>
                        </ScrollView>

                    </View>
                </Modal>

                <Text style={styles.Fromcontect}>From contact</Text>
                {contacts.map((contact, index) => (
                    <TouchableOpacity key={index} style={styles.ShareBoxFlex}>
                        <View style={styles.ShareBox}>
                            <Entypo name="share" color="#FFFFFF" size={24} />
                        </View>
                        <View>
                            <Text style={styles.shareName}>{contact.name}</Text>
                            <Text style={styles.shareName}>{contact.phone}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

export default Invitefriends;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
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
    ShareBox: {
        backgroundColor: "#19BFB5",
        width: 37,
        height: 37,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    sharelink: {
        color: "#0F0C20",
        fontSize: 18,
        fontWeight: "500",
        textAlign: "center",
        marginTop: 5,
    },
    ShareBoxFlex: {
        flexDirection: "row",
        gap: 20,
        marginBottom: 10,
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    ModalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalContent: {
        paddingTop: 20,
        flexDirection: 'row',
    },
    option: {
        alignItems: 'center',
        marginRight: 20,
    },
    optionText: {
        marginTop: 5,
        fontSize: 12,
        color: "#000000",
        fontWeight: "400",
    },
    Fromcontect: {
        color: "#0F0C20",
        fontSize: 18,
        fontWeight: "500",
        marginVertical: 20,
    },
    shareName: {
        color: "#000000",
        fontSize: 13,
        fontWeight: "400",
    },
});
