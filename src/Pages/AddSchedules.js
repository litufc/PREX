import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import CardLarge from '../Components/Cards/CardLarge';
import { Body, Title } from 'native-base';

export default class AddSchedules extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Toolbar 
                    title="Adicionar Horários" 
                    textColor="#FFFFFF" 
                    background={AppStyles.colour.primaryColor}
                    iconColor={AppStyles.colour.secundaryColor}
                    onPress={() => this.props.navigation.navigate('Schedules')}
                />
                <ScrollView style={styles.container}>
                    <Body style={styles.containerTitle}>
                        <Title style={styles.titleHeader}>Escolha as Datas Disponíveis</Title>
                    </Body>
                    <CardLarge icon="history" onPress={() => this.props.navigation.navigate('SchedulesStatus')}>Status de Agendamentos</CardLarge>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerTitle: {
        alignItems: "center"
    },
    titleHeader: {
        fontFamily: 'Roboto_medium',
        color: 'white',
        fontSize: 23
    },
    container: {
        height: '100%',
        width: '100%',
        paddingHorizontal: 16,
        backgroundColor: AppStyles.colour.primaryColor
    }
})