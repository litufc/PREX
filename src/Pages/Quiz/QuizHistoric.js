import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';

import AppStyles from '../../global';
import Toolbar from '../../Components/Toolbar';
import CardHistoric from '../../Components/Cards/CardHistoric';

export default class QuizHistoric extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const user = this.props.navigation.getParam('userType');
        return(
            <View>
                <Toolbar 
                    title="Histórico de Questionários" 
                    textColor="#FFFFFF" 
                    background={AppStyles.colour.primaryColor}
                    iconColor={AppStyles.colour.secundaryColor}
                    onPress={() => this.props.navigation.navigate('Quiz')}
                />
                <ScrollView style={styles.container}>
                    <CardHistoric 
                        author="Mateus Pereira dos Santos"
                        date="15/07/2019"
                        office="Bolsista"
                    />
                    <CardHistoric 
                        author="Mateus Pereira dos Santos"
                        date="17/06/2019"
                        office="Comunidade"
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