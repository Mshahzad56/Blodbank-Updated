import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomTabBar = ({ state, descriptors, navigation }) => {
    const { routes, index } = state;

    return (
        <View style={styles.buttonContainer}>
            {routes.map((route, i) => {
                const { options } = descriptors[route.key];
                const label = options.title ?? route.name;

                const isFocused = index === i;

                const onPress = () => {
                    navigation.navigate(route.name);
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        style={[styles.button, isFocused && styles.activeButton]}
                        onPress={onPress}
                    >
                        <Text style={[styles.buttonText, isFocused && styles.activeButtonText]}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        borderColor: '#E3E3E3',
        borderWidth: 1,
        width: 180,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeButton: {
        backgroundColor: '#E21629',
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '400',
        color: '#0F0C20',
    },
    activeButtonText: {
        color: '#FFF',
    },
});

export default CustomTabBar;
