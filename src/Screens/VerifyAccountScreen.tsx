import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../assets/Colors';

export default function VerifyAccountScreen() {
    const navigation = useNavigation();
    const [code, setCode] = useState('');
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Verify your Account</Text>

            <Image 
                source={require('../Images/verfiy.png')}
                style={styles.image}
                resizeMode="contain"
            />

            <Text style={styles.subtitle}>Verification Code Sent!</Text>
            <Text style={styles.infoText}>
                A verification code has been sent to your number for{'\n'}Verifying your account.
            </Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Verification Code..."
                    placeholderTextColor="#666"
                    keyboardType="number-pad"
                    value={code}
                    onChangeText={setCode}
                />
                <TouchableOpacity 
                    disabled={timer > 0}
                    style={styles.resendButton}
                >
                    <Text style={[styles.resendText, timer > 0 && styles.disabledText]}>
                        Resend ({timer}s)
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.goBackContainer}>
                <Text style={styles.goBackText}>Go back to </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity 
                style={styles.verifyButton} 
                onPress={() => navigation.navigate('VerfiySuesss')}
            >
                <Text style={styles.verifyText}>Verify</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: colors.main,
        marginTop: 90,
        marginBottom: 72,
    },
    image: {
        width: '100%',
        height: 240,
        marginBottom: 32,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1C274C',
        textAlign: 'center',
        marginBottom: 8,
    },
    infoText: {
        fontSize: 14,
        color: '#666666',
        textAlign: 'center',
        marginBottom: 32,
        lineHeight: 20,
    },
    inputContainer: {
        marginBottom: 32,
    },
    input: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        fontSize: 16,
        marginBottom: 8,
    },
    resendButton: {
        alignSelf: 'flex-end',
    },
    resendText: {
        color: colors.main,
        fontSize: 14,
        fontWeight: '500',
    },
    disabledText: {
        color: '#999999',
    },
    goBackContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },
    goBackText: {
        fontSize: 14,
        color: '#666666',
    },
    loginText: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.main,
    },
    verifyButton: {
        backgroundColor: colors.main,
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    verifyText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});