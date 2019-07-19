import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import CardLarge from '../Components/Cards/CardLarge';
import CardSmall from '../Components/Cards/CardSmall';

export default class Menu extends Component {
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
                    title="Menu" 
                    textColor="#FFFFFF" 
                    background={AppStyles.colour.primaryColor}
                />
                <ScrollView style={styles.container}>
                    {this.state.userType === 0 &&
                        <CardLarge 
                            icon="calendar" 
                            onPress={() => this.props.navigation.navigate('Schedules')}
                        >
                            Agendamentos
                        </CardLarge>
                    }
                    {this.state.userType === 1 &&
                        <CardLarge icon="calendar">Confirmar Agendamento</CardLarge>
                    }
                    <CardLarge icon="tasks">Questionários</CardLarge>
                    <Grid>
                        <Col style={{ marginRight: 8 }}>
                            <CardSmall icon="question">Ajuda</CardSmall>
                        </Col>
                        <Col style={{ marginLeft: 8 }}>
                            <CardSmall icon="cog" onPress={() => this.props.navigation.navigate('Options')}>Opções</CardSmall>
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
        paddingHorizontal: 16,
        backgroundColor: AppStyles.colour.primaryColor
    }
})