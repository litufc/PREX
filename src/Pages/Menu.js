import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container } from 'native-base';

import Toolbar from '../Components/Toolbar';

export default class Login extends Component {
    render(){
        return(
            <View>
                <Toolbar title="Menu" textColor="#FFFFFF" background="#006CB4"/>
                <View style={styles.container}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#000000'
    },
    container: {
        height: '100%',
        width: '100%',
        marginTop: 80,
        backgroundColor: '#006CB4'
    }
})