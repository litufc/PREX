import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import ButtonInput from '../Components/Inputs/ButtonInput';

export default class Login extends Component {
    render(){
        return(
            <View>
                <Toolbar 
                    title="Menu" 
                    textColor="#FFFFFF" 
                    background={AppStyles.colour.primaryColor}
                />
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
        backgroundColor: AppStyles.colour.primaryColor
    }
})