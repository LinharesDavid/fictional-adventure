import React, { useState, useEffect, useCallback } from 'react';
import { View, Platform, StyleSheet, Text, Button, Image } from 'react-native';
import Giph from '../../components/Giph';

export default function Detail(props) {
    const {navigation, route} = props;
    const [data, setData] = useState();
    const [url, setUrl] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  

    const fetchJoke = useCallback(() => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${route.params}`)
            .then(response => response.json())
            .then(setData)
            .catch(error => console.log(error));
    });

    const fetchImage = useCallback(() => {
        setLoading(true);
        fetch(`https://api.thecatapi.com/v1/images/search`)
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setUrl(data[0].url);
            })
            .catch(setError);
    });

    const fetchAll = useCallback(() => {
        fetchJoke();
        fetchImage();
    });

    useEffect(() => {   
        fetchAll();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.joke}>{data == undefined ? '' : data.value}</Text>
            <Button style={styles.button} onPress={ fetchAll } title="Bring me an other one" color="#FF0000"/>
            <Giph url={url} loading={loading} error={error}/>
        </View>
        );
    } 
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 15,
            margin: 30,
            alignItems: 'center',
        },
        joke: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        }
    });