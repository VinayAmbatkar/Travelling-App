import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../assets/Colors';
import sizes from '../assets/Sizes';
import { useNavigation } from '@react-navigation/native';

type NavigationProps = {
    navigation: any,
    onPress: () => void
}

export default function WelcomeScreenOne(props: NavigationProps) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.textMain}>Case Tracker</Text>
            <Text style={styles.textSecondary}>
                Track Your Cases, USCIS & EOIR – All in One App!
            </Text>

            <View style={styles.pictureContainer}>
                <Image 
                    style={styles.picture} 
                    source={require("../Images/juage1.png")}  // Replace with actual image
                    resizeMode="contain"
                />
            </View>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => props.navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.continueText}>Or Continue without Log in</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 20,
    },
    textMain: {
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: sizes.headerSize,
        color: colors.main,
        textAlign: 'center',
        marginBottom: 10,
    },
    textSecondary: {
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: sizes.paragraphSize,
        color: colors.secondary,
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
    },
    pictureContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    picture: {
        width: 300,
        height: 250,
    },
    button: {
        backgroundColor: colors.main,
        paddingVertical: 12,
        paddingHorizontal: 140,
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    continueText: {
        marginTop: 15,
        fontSize: 14,
        color: colors.secondary,
    },
});
