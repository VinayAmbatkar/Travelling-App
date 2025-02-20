import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../assets/Colors';
import sizes from '../assets/Sizes';

export default function LoginScreen() {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign in to your</Text>
            <Text style={[styles.title, styles.highlight]}>Case Tracker</Text>
            <Text style={styles.subtitle}>
                Login by simply verifying your <Text style={styles.linkText}>phone number</Text>
            </Text>

            <Image 
                source={require('../Images/login.png')} // Replace with actual image
                style={styles.image}
                resizeMode="contain"
            />

            <Text style={styles.label}>Phone Number</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your Phone Number"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
                Don't have an account? <Text style={styles.signUpText} onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
            </Text>
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
    title: {
        fontSize: sizes.headerSize,
        fontWeight: 'bold',
        color: '#2C2C54',
        textAlign: 'center',
    },
    highlight: {
        color: colors.main,
    },
    subtitle: {
        fontSize: sizes.paragraphSize,
        color: colors.secondary,
        textAlign: 'center',
        marginBottom: 20,
    },
    linkText: {
        color: colors.main,
        fontWeight: '600',
    },
    image: {
        width: 300,
        height: 250,
        marginBottom: 20,
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: 14,
        color: '#333',
        fontWeight: '500',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        backgroundColor: '#FFF',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 20,
    },
    loginButton: {
        backgroundColor: colors.main,
        paddingVertical: 12,
        width: '100%',
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
    },
    loginText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footerText: {
        fontSize: 14,
        color: '#666',
    },
    signUpText: {
        color: colors.main,
        fontWeight: '600',
    },
});

