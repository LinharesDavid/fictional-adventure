import React from 'react';
import { View, Platform, StyleSheet, Text } from 'react-native';

export default function App() {
return <View style={styles.container}>
    <Text style={styles.welcome}>Home</Text>
    <Text style={styles.platformText}>{platformText}</Text>
</View>; 
} 

const platformText = Platform.select({
    'ios': 'IOS device',
    'android': 'Android device'
});

const platformColor = Platform.select({
    'ios': '#FF0000',
    'android': '#00FF00'
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        },
        welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        },
    platformText: {
        fontSize: 24,
        fontWeight: "bold",
        color: platformColor
    }
});