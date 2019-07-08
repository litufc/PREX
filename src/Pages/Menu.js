import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import CardLarge from '../Components/Cards/CardLarge';

export default class Login extends Component {
    render(){
        return(
            <View>
                <Toolbar 
                    title="Menu" 
                    textColor="#FFFFFF" 
                    background={AppStyles.colour.primaryColor}
                />
                <ScrollView style={styles.container}>
                    <CardLarge icon="calendar">Confirmar Agendamento</CardLarge>
                    <CardLarge icon="tasks">Questionários</CardLarge>
                </ScrollView>
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
        paddingHorizontal: 16,
        backgroundColor: AppStyles.colour.primaryColor
    }
})