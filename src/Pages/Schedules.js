import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import CardLarge from '../Components/Cards/CardLarge';

export default class Schedules extends Component {
    constructor(props){
        super(props);
        this.state = {
            userType: 0
        }
    }
    render(){
        return(
            <View>
                <Toolbar 
                    title="Agendamentos" 
                    textColor="#FFFFFF" 
                    background={AppStyles.colour.primaryColor}
                    iconColor={AppStyles.colour.secundaryColor}
                    onPress={() => this.props.navigation.navigate('Menu')}
                />
                <ScrollView style={styles.container}>
                    <CardLarge icon="plus-circle">Adicionar Horários</CardLarge>
                    <CardLarge icon="history">Status de Agendamentos</CardLarge>
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
        paddingHorizontal: 16,
        backgroundColor: AppStyles.colour.primaryColor
    }
})