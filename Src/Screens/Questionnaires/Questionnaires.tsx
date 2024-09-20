import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Questionnaires = () => {
    const navigation = useNavigation(); // Get navigation object
    const [selectedOptions, setSelectedOptions] = useState({});
    const [termsChecked, setTermsChecked] = useState(false); // State for terms and conditions checkbox

    const questions = [
        { id: 1, question: 'Do you have diabetes?', options: ['Yes', 'No'] },
        { id: 2, question: 'Have you ever had problems with your heart or lungs?', options: ['Yes', 'No'] },
        { id: 3, question: 'In the last 28 days do you have had covid-19?', options: ['Yes', 'No'] },
        { id: 4, question: 'Have you ever had a positive test for the HIV/AIDS virus?', options: ['Yes', 'No'] },
        { id: 5, question: 'Have you ever had cancer?', options: ['Yes', 'No'] },
        { id: 6, question: 'In the last 3 months have you had a vaccination?', options: ['Yes', 'No'] },
    ];

    const handleSelect = (questionId, option) => {
        setSelectedOptions(prev => ({ ...prev, [questionId]: option }));
    };

    const handleSubmit = () => {
        // Check if all questions have been answered and terms are checked
        const allAnswered = questions.every(q => selectedOptions[q.id] !== undefined);
        const allNo = questions.every(q => selectedOptions[q.id] === 'No');

        if (allAnswered && termsChecked && allNo) {
            navigation.navigate('PersonalDetails'); // Direct navigation
        } else {
            // Optional: You can show a basic alert or notification if needed
            alert('Please ensure all questions are answered and terms are accepted.');
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Questionnaires</Text>
                <Text style={styles.titleDescription}>Fill up the following questionnaires and become a donor.</Text>
                {questions.map((q) => (
                    <View key={q.id} style={styles.questionContainer}>
                        <Text style={styles.questionText}>{q.question}</Text>
                        <View style={styles.optionRow}>
                            {q.options.map((option) => (
                                <View key={option} style={styles.optionContainer}>
                                    <RadioButton
                                        value={option}
                                        status={selectedOptions[q.id] === option ? 'checked' : 'unchecked'}
                                        onPress={() => handleSelect(q.id, option)}
                                        color='#E21629'
                                    />
                                    <Text style={styles.optionText}>{option}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
                <View style={styles.checkboxContainer}>
                    <RadioButton
                        value="checked"
                        status={termsChecked ? 'checked' : 'unchecked'}
                        onPress={() => setTermsChecked(prev => !prev)}
                        color='#E21629'
                    />
                    <Text style={styles.CheckText}>By clicking, you agree to our terms and conditions.</Text>
                </View>
                <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('HomeProfile')} >
                    <Text style={styles.submitButtonText}>Become a donor</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Questionnaires;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: "#0F0C20",
    },
    questionContainer: {
        marginBottom: 20,
    },
    questionText: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 10,
        color: "#0F0C20"
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    optionText: {
        fontSize: 18,
        color: "#676A6C",
        fontWeight: "400"
    },
    titleDescription: {
        color: "#73737B",
        fontSize: 18,
        fontWeight: "400",
        paddingVertical: 10,
    },
    submitButton: {
        width: "100%",
        padding: 15,
        borderRadius: 6,
        backgroundColor: "#E21629",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    submitButtonText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "500",
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    CheckText: {
        color: "#73737B",
        fontSize: 18,
        fontWeight: "400",
        marginLeft: 10,
    },

});
