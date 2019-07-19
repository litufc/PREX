import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import CardLarge from '../Components/Cards/CardLarge';
import CardSmall from '../Components/Cards/CardSmall';

export default class Options extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Toolbar 
                    title="Opções" 
                    textColor="#FFFFFF" 
                    background={AppStyles.colour.primaryColor}
                    iconColor={AppStyles.colour.secundaryColor}
                    onPress={() => this.props.navigation.navigate('Menu')}
                />
                <ScrollView style={styles.container}>
                    <CardLarge icon="cog">Opções da Conta</CardLarge>
                    <CardLarge icon="universal-access">Acessibilidade</CardLarge>
                    <Grid>
                        <Col style={{ marginRight: 8 }}>
                            <CardSmall icon="info">Créditos</CardSmall>
                        </Col>
                        <Col style={{ marginLeft: 8 }}>
                            <CardSmall icon="sign-out" background="#EB5425">Sair</CardSmall>
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