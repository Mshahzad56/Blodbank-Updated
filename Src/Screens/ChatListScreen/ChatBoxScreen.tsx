import React, { useState, useRef, useCallback } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
    Alert,
    Animated,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute, useNavigation } from '@react-navigation/native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import Modal from 'react-native-modal';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const initialMessages = [
    { id: '1', text: 'Hello!', isSentByMe: true },
    { id: '2', text: 'Hi! How are you?', isSentByMe: false },
];

const ChatBoxScreen = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [inputText, setInputText] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [audioFilePath, setAudioFilePath] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [iconLayout, setIconLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });

    const audioRecorderPlayer = useRef(new AudioRecorderPlayer()).current;
    const navigation = useNavigation();
    const route = useRoute();
    const { name, profileImage, isActive, cardDetails } = route.params;

    const sendMessage = () => {
        if (inputText.trim() !== '') {
            setMessages([...messages, { id: `${messages.length + 1}`, text: inputText, isSentByMe: true }]);
            setInputText('');
        }
    };

    const sendVoiceMessage = () => {
        if (audioFilePath) {
            setMessages([...messages, { id: `${messages.length + 1}`, text: 'Voice message', isSentByMe: true, audioFilePath }]);
            setAudioFilePath('');
            setIsRecording(false);
        } else {
            Alert.alert('No voice message recorded.');
        }
    };

    const startRecording = async () => {
        try {
            const path = 'audio.mp4';
            const uri = await audioRecorderPlayer.startRecorder(path);
            setAudioFilePath(uri);
            setIsRecording(true);
            console.log('Recording started: ', uri);
        } catch (error) {
            console.error('Error starting recording', error);
        }
    };

    const stopRecording = async () => {
        try {
            if (audioRecorderPlayer) {
                const result = await audioRecorderPlayer.stopRecorder();
                setIsRecording(false);
                setAudioFilePath(result);
                console.log('Recording stopped: ', result);
                sendVoiceMessage();
            } else {
                console.error('AudioRecorderPlayer instance is null');
            }
        } catch (error) {
            console.error('Error stopping recording', error);
        }
    };

    const renderItem = ({ item }) => (
        <View style={[styles.messageContainer, item.isSentByMe ? styles.sentMessage : styles.receivedMessage]}>
            {item.audioFilePath ? (
                <TouchableOpacity onPress={() => audioRecorderPlayer.startPlayer(item.audioFilePath)}>
                    <Text style={styles.messageText}>Voice message</Text>
                </TouchableOpacity>
            ) : (
                <Text style={styles.messageText}>{item.text}</Text>
            )}
        </View>
    );

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleModalOption = (option) => {
        switch (option) {
            case 'viewProfile':
                Alert.alert('View Profile clicked');
                break;
            case 'deleteChat':
                Alert.alert('Delete Chat clicked');
                break;
            case 'block':
                Alert.alert('Block clicked');
                break;
            case 'report':
                Alert.alert('Report clicked');
                break;
            default:
                break;
        }
        setModalVisible(false);
    };

    const handleIconLayout = (event) => {
        const { x, y, width, height } = event.nativeEvent.layout;
        setIconLayout({ x, y, width, height });
        setModalPosition({
            top: y + height,
            left: x,
        });
    };

    const startVoiceCall = useCallback(() => {
        try {
            navigation.navigate('VoiceCall', { callerDetails: cardDetails });
        } catch (error) {
            console.error("Navigation failed: ", error);
        }
    }, [navigation, cardDetails]);

    const startVideoCall = useCallback(() => {
        try {
            navigation.navigate('VideoCall', { callerDetails: cardDetails });
        } catch (error) {
            console.error("Navigation failed: ", error);
        }
    }, [navigation, cardDetails]);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={90}
        >
            <View style={styles.header}>
                <View style={styles.profileContainer}>
                    <Image source={profileImage} style={styles.profileImage} />
                    {isActive && <View style={styles.activeDot} />}
                </View>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconButton} onPress={startVoiceCall}>
                        <Ionicons name="call" size={24} color="#333" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton} onPress={startVideoCall}>
                        <Ionicons name="videocam" size={24} color="#333" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={toggleModal}
                        onLayout={handleIconLayout}
                    >
                        <Ionicons name="ellipsis-vertical" size={24} color="#333" />
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.messageList}
                contentContainerStyle={{ paddingVertical: 20 }}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    value={inputText}
                    onChangeText={setInputText}
                    style={styles.input}
                    placeholder="Type a message"
                />
                <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                    <Ionicons name="send" size={24} color="#000000" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPressIn={startRecording}
                    onPressOut={stopRecording}
                    style={[styles.voiceButton, isRecording && styles.recording]}
                >
                    <Ionicons name={isRecording ? "stop" : "mic"} size={24} color="#000000" />
                </TouchableOpacity>
            </View>
            <Modal
                isVisible={isModalVisible}
                style={[styles.modal, { top: modalPosition.top, left: modalPosition.left }]}
                onBackdropPress={() => setModalVisible(false)}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection="down"
            >
                <View style={styles.modalContent}>
                    <TouchableOpacity style={styles.modalOption} onPress={() => handleModalOption('viewProfile')}>
                        <Text style={styles.modalOptionText}>View Profile</Text>
                        <Octicons name="person" size={20} color="#2B2B2B" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalOption} onPress={() => handleModalOption('deleteChat')}>
                        <Text style={styles.modalOptionTextDleat}>Delete Chat</Text>
                        <Ionicons name="trash" size={20} color="#2B2B2B" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalOption} onPress={() => handleModalOption('block')}>
                        <Text style={styles.modalOptionText}>Block</Text>
                        <MaterialCommunityIcons name="block-helper" size={20} color="#2B2B2B" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalOption} onPress={() => handleModalOption('report')}>
                        <Text style={styles.modalOptionText}>Report</Text>
                        <Octicons name="report" size={20} color="#2B2B2B" />
                    </TouchableOpacity>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
        position: 'relative',
    },
    profileContainer: {
        position: 'relative',
        width: 32,
        height: 32,
    },
    profileImage: {
        width: 32,
        height: 32,
        borderRadius: 30,
    },
    activeDot: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#FD0000',
        borderWidth: 2,
        borderColor: '#FFF',
    },
    name: {
        fontSize: 15,
        fontWeight: '400',
        color: '#191724',
        flex: 1,
        textAlign: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageList: {
        flex: 1,
        paddingHorizontal: 20,
    },
    messageContainer: {
        maxWidth: '80%',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    sentMessage: {
        backgroundColor: '#838383',
        alignSelf: 'flex-end',
    },
    receivedMessage: {
        backgroundColor: '#FD0000',
        alignSelf: 'flex-start',
    },
    messageText: {
        fontSize: 16,
        color: '#FFF',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderTopColor: '#DDD',
    },
    input: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#F7F7F7',
        borderRadius: 25,
    },
    sendButton: {
        marginLeft: 10,
        padding: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    voiceButton: {
        marginLeft: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    recording: {
        backgroundColor: '#FF0000',
    },
    modal: {
        position: 'absolute',
        width: 150,
        borderRadius: 10,
        zIndex: 2000,
    },
    modalContent: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10,
        alignItems: 'flex-end',

    },
    modalOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    modalOptionText: {
        fontSize: 14,
        fontWeight: "400",
        marginRight: 10,
        color: "#2B2B2B",
    },
    modalOptionTextDleat: {
        fontSize: 14,
        fontWeight: "400",
        marginRight: 10,
        color: "#FF6060",
    }
});

export default ChatBoxScreen;
