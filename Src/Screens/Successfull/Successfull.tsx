import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Successfull = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('HomeScreen');
        }, 3000);


        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../Assets/Conditions/ckeck.png')}
                style={styles.image}
            />
            <Text style={styles.text}>Donor registration successful</Text>
        </View>
    );
};

export default Successfull;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    image: {
        width: 119,
        height: 150,
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: '#0F0C20',
        width: '50%',
        textAlign: 'center',
    },
});
