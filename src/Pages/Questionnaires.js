import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import CardLarge from '../Components/Cards/CardLarge';

export default class Questionnaires extends Component {
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
                    title="Questionários" 
                    textColor="#FFFFFF" 
                    background={AppStyles.colour.primaryColor}
                    iconColor={AppStyles.colour.secundaryColor}
                    onPress={() => this.props.navigation.navigate('Menu')}
                />
                <ScrollView style={styles.container}>
                    {this.state.userType === 0 &&
                        <CardLarge 
                            icon="calendar" 
                            onPress={() => this.props.navigation.navigate('Questionnaire', {user: 0})}
                        >
                            Coordenador da Prex
                        </CardLarge>
                    }
                    {this.state.userType === 1 &&
                        <CardLarge
                            icon="user-tie"
                            onPress={() => this.props.navigation.navigate('Questionnaire', {user: 1})}
                        >
                            Coordenador
                        </CardLarge>
                    }
                    {this.state.userType === 2 &&
                        <CardLarge
                            icon="user-graduate"
                            onPress={() => this.props.navigation.navigate('Questionnaire', {user: 2})}
                        >
                            Bolsista
                        </CardLarge>
                    }
                    <CardLarge
                        icon="users"
                        onPress={() => this.props.navigation.navigate('Questionnaire', {user: 3})}
                    >
                        Membro da Comunidade
                    </CardLarge>
                    <CardLarge icon="history">Histórico de Questionários</CardLarge>
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