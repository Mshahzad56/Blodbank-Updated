import React from 'react';
import { View, StyleSheet } from 'react-native';

const StepIndicator = ({ currentStep }) => {
    return (
        <View style={styles.indicatorContainer}>
            {[1, 2, 3].map((step) => (
                <View
                    key={step}
                    style={[
                        styles.indicator,
                        currentStep === step && styles.activeIndicator,
                    ]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    indicator: {
        width: 50,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#C4C4C4',
        marginHorizontal: 5,
    },
    activeIndicator: {
        backgroundColor: '#DE0A1E',
    },
});

export default StepIndicator;
