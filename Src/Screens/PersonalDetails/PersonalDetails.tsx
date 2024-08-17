import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const PersonalDetails = () => {
    const [selectedBloodGroup, setSelectedBloodGroup] = useState(null);
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [areaCode, setAreaCode] = useState('');
    const navigation = useNavigation();

    const bloodGroups = [
        'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'HH'
    ];

    const handleSelectBloodGroup = (group) => {
        setSelectedBloodGroup(group);
    };

    useEffect(() => {
        if (selectedBloodGroup && age && gender && address && city && areaCode) {
            navigation.navigate('Successfull');
        }
    }, [selectedBloodGroup, age, gender, address, city, areaCode]);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Personal Details</Text>
                <Text style={styles.titleTwo}>Choose Blood Group</Text>
                <View style={styles.bloodGroupContainer}>
                    {bloodGroups.map((group) => (
                        <TouchableOpacity
                            key={group}
                            style={[
                                styles.bloodGroupButton,
                                selectedBloodGroup === group && styles.selectedButton
                            ]}
                            onPress={() => handleSelectBloodGroup(group)}
                        >
                            <Text style={[
                                styles.bloodGroupText,
                                selectedBloodGroup === group && styles.selectedButtonText
                            ]}>{group}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={{ gap: 10, paddingVertical: 20 }}>
                    <Text style={styles.titleTwo}>Age</Text>
                    <TextInput
                        style={styles.ageInput}
                        placeholder="Age"
                        value={age}
                        onChangeText={setAge}
                        keyboardType="numeric"
                        placeholderTextColor={"#8D8D8D"}
                    />
                </View>
                <View style={{ gap: 10, paddingVertical: 20 }}>
                    <Text style={styles.titleTwo}>Gender</Text>
                    <View style={styles.genderContainer}>
                        <View style={styles.genderOption}>
                            <RadioButton
                                value="Male"
                                status={gender === 'Male' ? 'checked' : 'unchecked'}
                                onPress={() => setGender('Male')}
                                color='#B22222'
                            />
                            <Text style={styles.genderText}>Male</Text>
                        </View>
                        <View style={styles.genderOption}>
                            <RadioButton
                                value="Female"
                                status={gender === 'Female' ? 'checked' : 'unchecked'}
                                onPress={() => setGender('Female')}
                                color='#B22222'
                            />
                            <Text style={styles.genderText}>Female</Text>
                        </View>
                        <View style={styles.genderOption}>
                            <RadioButton
                                value="Other"
                                status={gender === 'Other' ? 'checked' : 'unchecked'}
                                onPress={() => setGender('Other')}
                                color='#B22222'
                            />
                            <Text style={styles.genderText}>Other</Text>
                        </View>
                    </View>
                </View>
                <View style={{ gap: 10, paddingVertical: 20 }}>
                    <Text style={styles.titleTwo}>Address</Text>
                    <TextInput
                        style={styles.ageInput}
                        placeholder="Konodas Gilgit, Pakistan"
                        value={address}
                        onChangeText={setAddress}
                        placeholderTextColor={"#8D8D8D"}
                    />
                </View>
                <View style={{ gap: 10, paddingVertical: 20 }}>
                    <Text style={styles.titleTwo}>City</Text>
                    <TextInput
                        style={styles.ageInput}
                        placeholder="Gilgit"
                        value={city}
                        onChangeText={setCity}
                        placeholderTextColor={"#8D8D8D"}
                    />
                </View>
                <View style={{ gap: 10, paddingVertical: 20 }}>
                    <Text style={styles.titleTwo}>Area code</Text>
                    <TextInput
                        style={styles.ageInput}
                        placeholder="Gilgit"
                        value={areaCode}
                        onChangeText={setAreaCode}
                        placeholderTextColor={"#8D8D8D"}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default PersonalDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: "#0F0C20",
    },
    titleTwo: {
        color: "#0F0C20",
        fontSize: 18,
        fontWeight: "400",
    },
    bloodGroupContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    bloodGroupButton: {
        flexBasis: '30%',
        margin: 5,
        padding: 15,
        borderRadius: 6,
        borderColor: "#E3E3E3",
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedButton: {
        backgroundColor: '#B22222',
    },
    bloodGroupText: {
        fontSize: 18,
        color: '#000000',
        fontWeight: '400',
    },
    selectedButtonText: {
        color: '#FFF',
    },
    ageInput: {
        color: "#8D8D8D",
        borderColor: '#E3E3E3',
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        width: '100%',
    },
    genderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    genderOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    genderText: {
        fontSize: 18,
        color: '#0F0C20',
        fontWeight: "400",
    },
});
