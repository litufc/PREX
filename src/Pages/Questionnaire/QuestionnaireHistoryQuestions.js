import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import AppStyles from '../../global';
import Toolbar from '../../Components/Toolbar';
import CardSimple from '../../Components/Cards/CardSimple';

export default class QuizHistoricQuestions extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Toolbar 
                    title="Mateus Pereira dos Santos" 
                    textColor="#FFFFFF" 
                    background={AppStyles.colour.primaryColor}
                    iconColor={AppStyles.colour.secundaryColor}
                    iconRight={true}
                    onPress={() => this.props.navigation.navigate('Menu')}
                />
                <View style={styles.container}>
                    <ScrollView style={{flexGrow: 0.7}} contentContainerStyle={styles.scroll}>
                        <CardSimple 
                            title="Pergunta 1"
                            subtitle="Qual o nome do projeto?"
                        />
                        <CardSimple 
                            title="Pergunta 2"
                            subtitle="Qual o nome do projeto?"
                        />
                        <CardSimple 
                            title="Pergunta 3"
                            subtitle="Qual o nome do projeto?"
                        />
                        <CardSimple 
                            title="Pergunta 4"
                            subtitle="Qual o nome do projeto?"
                        />
                        <CardSimple 
                            title="Pergunta 5"
                            subtitle="Qual o nome do projeto?"
                        />
                        <CardSimple 
                            title="Pergunta 6"
                            subtitle="Qual o nome do projeto?"
                        />
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    scroll: {
        paddingHorizontal: 16,
        backgroundColor: AppStyles.colour.primaryColor
    }
})