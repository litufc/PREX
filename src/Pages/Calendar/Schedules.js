import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import AppStyles from '../../global';
import Toolbar from '../../Components/Toolbar';
import CardLarge from '../../Components/Cards/CardLarge';

export default class Schedules extends Component {
    constructor(props){
        super(props);
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
                    <CardLarge icon="plus-circle" onPress={() => this.props.navigation.navigate('AddSchedules')}>Adicionar Horários</CardLarge>
                    <CardLarge icon="history" onPress={() => this.props.navigation.navigate('SchedulesStatus')}>Status de Agendamentos</CardLarge>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingHorizontal: 16,
        backgroundColor: AppStyles.colour.primaryColor
    }
})