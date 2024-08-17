import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, StatusBar, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const { width, height } = Dimensions.get('window');

const VoiceCall = ({ navigation }) => {
    const [callTime, setCallTime] = useState('00:00');
    const [muted, setMuted] = useState(false);

    useEffect(() => {
        let timer;
        let seconds = 0;

        const startTimer = () => {
            timer = setInterval(() => {
                seconds += 1;
                const minutes = Math.floor(seconds / 60);
                const displaySeconds = seconds % 60;
                setCallTime(`${minutes < 10 ? '0' : ''}${minutes}:${displaySeconds < 10 ? '0' : ''}${displaySeconds}`);
            }, 1000);
        };

        startTimer();

        return () => clearInterval(timer);
    }, []);

    const toggleMute = () => {
        setMuted(!muted);
        // Add logic to mute/unmute the call
    };

    const switchToVideoCall = () => {

        navigation.navigate('VideoCall');
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#0f9d58" barStyle="dark-content" />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={25} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Entypo name="dots-three-horizontal" size={25} color="#FFF" />
                </TouchableOpacity>
            </View>
            <View style={styles.callerInfoContainer}>
                <View style={styles.profilePictureContainer}>
                    <Image source={require('../../Assets/Image/Profile.png')} style={styles.profilePicture} />
                </View>
                <Text style={styles.callTime}>{callTime}</Text>
            </View>
            <View style={styles.controlsContainer}>
                <TouchableOpacity style={styles.controlButton} onPress={toggleMute}>
                    <Ionicons name={muted ? "mic-off" : "mic"} size={30} color="#000000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.controlButton} onPress={switchToVideoCall}>
                    <AntDesign name="videocamera" size={30} color="#000000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.controlButton} onPress={() => {
                    // Add logic to enable/disable speaker
                }}>
                    <Feather name="volume-2" size={30} color="#000000" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.endCallButton} onPress={() => {
                    // Add logic to end the call
                }}>
                    <Feather name="phone-call" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f9d58',
        justifyContent: 'space-between',
    },
    header: {
        paddingTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    callerInfoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePictureContainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        overflow: 'hidden',
        marginBottom: 20,
    },
    profilePicture: {
        width: '100%',
        height: '100%',
    },
    callTime: {
        fontSize: 24,
        color: '#FFF',
        marginTop: 10,
    },
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    controlButton: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    endCallButton: {
        backgroundColor: '#E21629',
        borderRadius: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default VoiceCall;
