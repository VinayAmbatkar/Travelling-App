import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Feather } from '@expo/vector-icons';
import Octicons from '@expo/vector-icons/Octicons';
import colors from '../assets/Colors';

export default function MyCasesScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            {/* Top Bar */}
            <View style={styles.topBar}>
                <TouchableOpacity style={styles.sortButton}>
                    <Text style={styles.sortText}>Sort A-Z</Text>
                    <Ionicons name="chevron-down" size={16} color="white" style={styles.iconSpacing} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.addNewCaseTop}>
                    <Text style={styles.addNewText}>+ Add New Case</Text>
                </TouchableOpacity>
            </View>

            {/* Section Header */}
            <View style={styles.headerContainer}>
                <Text style={styles.sectionTitle}>My Cases</Text>
                <Text style={styles.sectionSubtitle}>
                    Save your cases to check them easily!
                </Text>
            </View>

            {/* Empty State Content */}
            <View style={styles.emptyStateContainer}>
                <Image 
                    source={require('../Images/MyCase.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
                <Text style={styles.noCasesText}>No Cases has been Saved</Text>

                <TouchableOpacity style={styles.addNewCaseButton}>
                    <Feather name="plus-square" size={18} color="white" />
                    <Text style={styles.addNewCaseButtonText}>Add New Case</Text>
                </TouchableOpacity>
            </View>

            {/* Bottom Navigation Bar */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="folder" size={24} color={colors.main} />
                    <Text style={styles.navText}>Cases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="document-text-outline" size={24} color="#8E8E93" />
                    <Text style={styles.navTextInactive}>USCIS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Octicons name="law" size={24} color="#8E8E93" />
                    <Text style={styles.navTextInactive}>EOIR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="ellipsis-horizontal" size={24} color="#8E8E93" />
                    <Text style={styles.navTextInactive}>More</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 16,
    },
    sortButton: {
        flexDirection: 'row',
        backgroundColor: colors.main,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
        alignItems: 'center',
    },
    sortText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
    },
    iconSpacing: {
        marginLeft: 4,
    },
    addNewCaseTop: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addNewText: {
        color: colors.main,
        fontSize: 14,
        fontWeight: '400',
    },
    headerContainer: {
        paddingHorizontal: 16,
        marginBottom: 32,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#1C274C',
        marginBottom: 4,
    },
    sectionSubtitle: {
        fontSize: 14,
        color: '#666666',
    },
    emptyStateContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 40,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 24,
    },
    noCasesText: {
        fontSize: 16,
        color: '#1C274C',
        marginBottom: 24,
    },
    addNewCaseButton: {
        flexDirection: 'row',
        backgroundColor: colors.main,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addNewCaseButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingVertical: 8,
        borderTopWidth: 1,
        borderColor: '#EEEEEE',
        paddingBottom: 20,
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
    },
    navText: {
        color: colors.main,
        fontSize: 12,
        marginTop: 4,
        fontWeight: '500',
    },
    navTextInactive: {
        color: '#8E8E93',
        fontSize: 12,
        marginTop: 4,
    },
});