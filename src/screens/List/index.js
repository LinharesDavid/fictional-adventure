import React, { useState, useEffect, useCallback } from 'react';
import { View, Platform, StyleSheet, Text } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
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
    const [displayedData, setdDisplayedData] = useState([]);

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/categories')
            .then(response => response.json())
            .then(categories => {
                setData(mapCategories(categories));
                setdDisplayedData(mapCategories(categories));
            })
            .catch(error => console.log(error));
    }, [])

    const onPress = useCallback((item) => {
        navigation.navigate('Detail', item.name);
    }, [navigation]);
    
    const onChangeText = useCallback((text) => {
        const newData = data.filter(element => element.name.includes(text.toLowerCase()));
        setdDisplayedData(newData);
    });

      return (
        <View style={styles.container}>
          <TextInput style={styles.input} placeholder='Search for a category here...' onChangeText={onChangeText}/>
          <FlatList
            data={displayedData}
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
    },
    input: { 
        padding: 10,
        backgroundColor: '#ededed', 
        height: 60 
    }
});