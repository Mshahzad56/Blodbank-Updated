import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, StatusBar, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // You can use any other icon library or icon you prefer

const initialChats = [
    {
        id: '1',
        name: 'John Doe',
        lastMessage: 'Hey, how are you?',
        timestamp: '2:30 PM',
        profileImage: require('../../Assets/Image/Profile.png'),
        unread: true,
    },
    {
        id: '2',
        name: 'Jane Smith',
        lastMessage: 'Meeting at 3 PM',
        timestamp: '1:00 PM',
        profileImage: require('../../Assets/Image/Profile.png'),
        unread: true,
    },
];

const activeList = [
    {
        id: '1',
        profileImage: require('../../Assets/Image/Profile.png'),
    },
    {
        id: '2',
        profileImage: require('../../Assets/Image/Profile.png'),
    },
    // Add more items as needed
];

const ChatListScreen = () => {
    const [chats, setChats] = useState(initialChats);
    const navigation = useNavigation();

    const handleChatPress = (chatId) => {
        // Find the chat details for the selected chatId
        const selectedChat = chats.find(chat => chat.id === chatId);

        // Check if the chatId is in the activeList
        const isActive = activeList.some(active => active.id === chatId);

        // Update the chat as read
        const updatedChats = chats.map(chat =>
            chat.id === chatId ? { ...chat, unread: false } : chat
        );
        setChats(updatedChats);

        // Navigate to the chat box screen with the chat details
        navigation.navigate('ChatBoxScreen', {
            chatId,
            name: selectedChat.name,
            profileImage: selectedChat.profileImage,
            isActive,
        });
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.screenName}>Messenger</Text>
            </View>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#999"
                />
            </View>

            <Text style={styles.messagesTitle}>Active List</Text>
            {/* Active List */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.activeList}>
                {activeList.map((item) => (
                    <View key={item.id} style={styles.activeContainer}>
                        <View>
                            <Image source={item.profileImage} style={styles.activeImage} />
                            <View style={styles.activeDot} />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <Text style={styles.messagesTitle}>Messages</Text>
            {/* Chat List */}
            <ScrollView showsVerticalScrollIndicator={false}>
                {chats.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.chatContainer}
                        onPress={() => handleChatPress(item.id)}
                    >
                        <Image source={item.profileImage} style={styles.profileImage} />
                        <View style={styles.chatInfo}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.lastMessage}>{item.lastMessage}</Text>
                        </View>
                        <View style={styles.timestampContainer}>
                            <Text style={styles.timestamp}>{item.timestamp}</Text>
                            {item.unread && <View style={styles.unreadDot} />}
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default ChatListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    backButton: {
        marginRight: 10,
    },
    screenName: {
        flex: 1,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '500',
        color: '#0F0C20',
    },
    searchContainer: {
        paddingVertical: 20,
        justifyContent: 'center',
    },
    searchInput: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#333',
    },
    activeList: {
        maxHeight: 100,
        paddingVertical: 10,
    },
    activeContainer: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    activeImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    activeDot: {
        position: 'absolute',
        bottom: 3,
        right: 3,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#FF0000',
        borderWidth: 2,
        borderColor: '#FFF',
    },
    chatContainer: {
        marginTop: 10,
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        borderRadius: 10,
        backgroundColor: '#FFF',
        marginVertical: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    chatInfo: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    lastMessage: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    timestampContainer: {
        alignItems: 'flex-end',
    },
    timestamp: {
        fontSize: 12,
        color: '#999',
    },
    unreadDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#007AFF',
        marginTop: 5,
    },
    messagesTitle: {
        fontSize: 20,
        fontWeight: '400',
        color: "#0F0C20"
    }
});
