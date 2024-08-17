import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import RtcEngine from 'react-native-agora';
import { AGORA_APP_ID } from '../../../AgoraConfig';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('window');

const VideoCallScreen = () => {
    const [engine, setEngine] = useState(null);
    const [peerIds, setPeerIds] = useState([]);
    const [muted, setMuted] = useState(false);
    const [cameraEnabled, setCameraEnabled] = useState(true);

    useEffect(() => {
        const initAgora = async () => {
            try {
                const rtcEngine = new RtcEngine();
                await rtcEngine.initialize(AGORA_APP_ID);
                await rtcEngine.enableVideo();

                rtcEngine.addListener('UserJoined', (uid) => {
                    setPeerIds(prev => [...prev, uid]);
                });

                rtcEngine.addListener('UserOffline', (uid) => {
                    setPeerIds(prev => prev.filter(id => id !== uid));
                });

                await rtcEngine.joinChannel(null, 'testChannel', null, 0);
                setEngine(rtcEngine);
            } catch (error) {
                console.error("Agora initialization failed: ", error);
            }
        };

        initAgora();

        return () => {
            engine?.leaveChannel();
            engine?.destroy();
        };
    }, [engine]);

    const toggleMute = async () => {
        if (engine) {
            setMuted(!muted);
            await engine.muteLocalAudioStream(!muted);
        }
    };

    const toggleCamera = async () => {
        if (engine) {
            setCameraEnabled(!cameraEnabled);
            await engine.enableLocalVideo(cameraEnabled);
        }
    };

    const switchCamera = async () => {
        if (engine) {
            await engine.switchCamera();
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.videoContainer}>
                {peerIds.map(uid => (
                    <View key={uid} style={styles.remoteVideo}>
                        {/* Replace with actual video view rendering */}
                    </View>
                ))}
                {cameraEnabled && (
                    <View style={styles.localVideo}>
                        {/* Replace with actual video view rendering */}
                    </View>
                )}
            </View>
            <View style={styles.controlsContainer}>
                <TouchableOpacity style={styles.controlButton} onPress={toggleMute}>
                    <Ionicons name={muted ? "mic-off" : "mic"} size={30} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.controlButton} onPress={toggleCamera}>
                    <Feather name={cameraEnabled ? "video" : "video-off"} size={30} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.controlButton} onPress={switchCamera}>
                    <Ionicons name="camera-reverse" size={30} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.endCallButton} onPress={() => {
                    engine?.leaveChannel();
                    engine?.destroy();
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
        backgroundColor: '#000',
    },
    videoContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    localVideo: {
        width: width / 3,
        height: height / 4,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    remoteVideo: {
        width: width / 3,
        height: height / 3,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 20,
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
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

export default VideoCallScreen;
