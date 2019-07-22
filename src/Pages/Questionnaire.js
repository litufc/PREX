import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Toolbar from '../Components/Toolbar';
import CardLarge from '../Components/Cards/CardLarge';
import { readQuestionnaire } from './../../firebase/Firebase-Questionnaire';

export default class Questionnaire extends Component {
    constructor(props){
        super(props);
        const userType = this.props.navigation.getParam('user', 0)
        this.state = {
            userType: userType
        }
    }

    state = {
        
    }

    getQuestionnaire = () => {
        readQuestionnaire()
    }

    render(){
        return(
            <View>
                {this.state.userType === 0 &&
                    <Toolbar 
                        title="Coordenador da Prex" 
                        textColor="#FFFFFF" 
                        background={AppStyles.colour.primaryColor}
                        iconColor={AppStyles.colour.secundaryColor}
                        onPress={() => this.props.navigation.navigate('Questionnaires')}
                    />
                }
                {this.state.userType === 1 &&
                    <Toolbar 
                        title="Coordenador" 
                        textColor="#FFFFFF" 
                        background={AppStyles.colour.primaryColor}
                        iconColor={AppStyles.colour.secundaryColor}
                        onPress={() => this.props.navigation.navigate('Questionnaires')}
                    />
                }
                {this.state.userType === 2 &&
                    <Toolbar 
                        title="Bolsista" 
                        textColor="#FFFFFF" 
                        background={AppStyles.colour.primaryColor}
                        iconColor={AppStyles.colour.secundaryColor}
                        onPress={() => this.props.navigation.navigate('Questionnaires')}
                    />
                }
                {this.state.userType === 3 &&
                    <Toolbar 
                        title="Membro da Comunidade" 
                        textColor="#FFFFFF" 
                        background={AppStyles.colour.primaryColor}
                        iconColor={AppStyles.colour.secundaryColor}
                        onPress={() => this.props.navigation.navigate('Questionnaires')}
                    />
                }
                <ScrollView style={styles.container}>
                    
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