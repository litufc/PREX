import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, View, StyleSheet } from 'react-native';

import AppStyles from '../global';
import TextLabel from '../Components/TextLabel';
import TextInput from '../Components/Inputs/TextInput';
import ButtonInput from '../Components/Inputs/ButtonInput';

export default class Login extends Component {
    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Image source={require('../../assets/logo.png')} style={styles.logo}/>
                <TextLabel
                    textColor="#707070"
                    textFont="Roboto_medium"
                    textSize={20}
                    align="center"
                >
                PREX-UFC
                </TextLabel>

                <View style={{marginBottom: 15, marginTop: 30, width: '100%'}}>
                    <TextInput type="text" label="E-mail" textColor={AppStyles.colour.primaryColor}/>
                </View>
                <TextInput type="password" label="Senha" textColor={AppStyles.colour.primaryColor}/>

                <View style={{marginTop: 30, marginBottom: 16}}>
                    <ButtonInput onPress={() => this.props.navigation.navigate('Menu')}>Entrar</ButtonInput>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <TextLabel
                        textColor={AppStyles.colour.primaryColor}
                        textFont="Roboto"
                        textSize={16}
                        align="center"
                    >
                    Esqueceu sua senha?
                    </TextLabel>
                    <View style={{marginLeft: 5}}>
                        <TextLabel
                            textColor={AppStyles.colour.secundaryColor}
                            textFont="Roboto_medium"
                            textSize={16}
                            align="center"
                            onPress={() => this.props.navigation.navigate('Menu')}
                        >
                        Clique aqui
                        </TextLabel>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        marginBottom: 10
    },
    container: {
        height: '100%',
        width: '100%',
        paddingHorizontal: 16,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        marginTop: 20
    }
})