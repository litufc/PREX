import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Button } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import CardLarge from '../Components/Cards/CardLarge';
import CardSmall from '../Components/Cards/CardSmall';

export default class Menu extends Component {

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
                    <Grid>
                        <Col style={{ marginRight: 8 }}>
                            <CardSmall icon="question">Ajuda</CardSmall>
                        </Col>
                        <Col style={{ marginLeft: 8 }}>
                            <CardSmall icon="cog">Opções</CardSmall>
                        </Col>
                    </Grid>
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