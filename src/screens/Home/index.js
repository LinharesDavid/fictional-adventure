import React, { useCallback } from 'react';
import { View, Platform, StyleSheet, Text, Button } from 'react-native';

export default function Home(props) {
    const {navigation} = props;
    const onPresstoList = useCallback(() => {
        navigation.navigate('List');
    }, [navigation]);


return <View style={styles.container}>
    <Text style={styles.welcome}>Home</Text>
    <Text style={styles.platformText}>{platformText}</Text>
    <Button onPress={onPresstoList} title="Go to List"/>
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