import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import CardStatus from '../Components/Cards/CardStatus';

export default class SchedulesStatus extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Toolbar 
                    title="Status de Agendamento" 
                    textColor="#FFFFFF" 
                    background={AppStyles.colour.primaryColor}
                    iconColor={AppStyles.colour.secundaryColor}
                    onPress={() => this.props.navigation.navigate('Schedules')}
                />
                <ScrollView style={styles.container}>
                    <CardStatus
                        author="Coordenador 1"
                        project="Projeto 1"
                        status={1}
                    />
                    <CardStatus
                        author="Coordenador 2"
                        project="Projeto 2"
                        status={2}
                    />
                    <CardStatus
                        author="Coordenador 3"
                        project="Projeto 3"
                        status={3}
                    />
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