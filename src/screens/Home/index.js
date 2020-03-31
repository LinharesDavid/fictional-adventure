import React, { useCallback } from 'react';
import { View, Platform, StyleSheet, Text, Button, Image } from 'react-native';

export default function Home(props) {
    const {navigation} = props;
    const onPresstoList = useCallback(() => {
        navigation.navigate('List');
    }, [navigation]);


return <View style={styles.container}>
    <Text style={styles.welcome}>Welcome into the Chuck Norris Application</Text>
    <Image style={{height: 200, width: 300}} source={{uri: 'https://assets.chucknorris.host/img/chucknorris_logo_coloured_small@2x.png'}}/>
    <Button onPress={onPresstoList} style={styles.enter} title="ENTER IN CHUCK NORRIS WORLD"/>
    <Text style={styles.platformText}>{platformText}</Text>
</View>; 
} 

const platformText = Platform.select({
    'ios': "You're in an IOS device, you're sutch a great man",
    'android': "You're in an ANDROID device, nobody is judging you..."
});

const platformColor = Platform.select({
    'ios': '#FF0000',
    'android': '#00FF00'
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        },
    welcome: {
        fontSize: 40,
        margin: 10,
        padding: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    platformText: {
        fontSize: 14,
        fontWeight: "bold",
        color: platformColor,
        position: 'absolute', //Here is the trick
        bottom: 50, //Here is the trick
    },
    enter: {
        textDecorationLine: 'underline'
    }
});