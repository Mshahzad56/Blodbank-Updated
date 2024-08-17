import React, { useEffect } from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';

const SpalishThree = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('ConditionsOne');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            <Image source={require("../../../Src/Assets/Logos/LogoThree.png")} style={styles.IMage} />
            <Text style={styles.Name}>Blood Dot</Text>
            <Text style={styles.Discription}>Gift a life, donate blood </Text>
        </View>
    );
};

export default SpalishThree;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        backgroundColor: "#FFF"
    },
    IMage: {
        width: 131,
        height: 131,
    },
    Name: {
        color: "#E21629",
        fontSize: 40,
        fontWeight: "400",
    },
    Discription: {
        color: "#73737B",
        fontSize: 24,
        fontWeight: "400",
    }
});
