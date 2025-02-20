import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../assets/Colors';

export default function VerifySuccessScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image 
                source={require('../Images/verified.png')} // Replace with actual image
                style={styles.image}
                resizeMode="contain"
            />

            <Text style={styles.title}>Your Account has been Verified Successfully</Text>
            <Text style={styles.subtitle}>You can now log in to CaseTracker</Text>

            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 250,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    loginButton: {
        backgroundColor: colors.main,
        paddingVertical: 12,
        width: '100%',
        borderRadius: 8,
        alignItems: 'center',
    },
    loginText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
