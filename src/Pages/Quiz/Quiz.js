import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';

import AppStyles from '../../global';
import Toolbar from '../../Components/Toolbar';
import CardLarge from '../../Components/Cards/CardLarge';

export default class Quiz extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const user = this.props.navigation.getParam('userType');
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
                    {user.userType === 0 &&
                        <CardLarge icon="user-tie">Coordenador</CardLarge>    
                    }
                    {user.userType === 1 &&
                        <CardLarge icon="user-tie">Coordenador</CardLarge>    
                    }
                    {user.userType === 2 &&
                        <CardLarge icon="user-graduate">Bolsista</CardLarge>    
                    }
                    <CardLarge icon="users">Membro da Comunidade</CardLarge>
                    <CardLarge 
                        icon="history" 
                        onPress={() => this.props.navigation.navigate('QuizHistoric', { userType: user.userType })}
                    >Histórico de Questionários</CardLarge>
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