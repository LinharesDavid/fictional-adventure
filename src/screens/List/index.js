import React, { useState, useEffect, useCallback } from 'react';
import { View, Platform, StyleSheet, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Categories from '../../components/Categories';

function mapCategories(categories) {
    let data = [];
    categories.forEach(element => {
        data.push({
            'name': element,
            'id': Math.random().toString(36).substring(7)
        });
    });

    return data;
}

export default function List(props) {
    const {navigation} = props;
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/categories')
            .then(response => response.json())
            .then(categories => setData(mapCategories(categories)))
            .catch(error => console.log(error));
    }, [])

    const onPress = useCallback(() => {
        navigation.navigate('Home');
      }, [navigation]);
    
      return (
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={values => <Categories item={values.item} onPress={onPress} />}
            keyExtractor={item => item.id}
          />
        </View>
      );
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