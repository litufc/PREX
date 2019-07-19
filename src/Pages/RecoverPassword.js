import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import TextLabel from '../Components/TextLabel';
import TextInput from '../Components/Inputs/TextInput';
import ButtonInput from '../Components/Inputs/ButtonInput';

export default class RecoverPassword extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Toolbar 
                    title="Recuperação de senha" 
                    textColor={AppStyles.colour.primaryColor}
                    background="#FFFFFF"
                    iconColor={AppStyles.colour.secundaryColor}
                    onPress={() => this.props.navigation.navigate('Login')}
                />
                <View style={styles.container}>
                    <TextLabel
                        textColor="#6D6D6D"
                        textFont="Roboto"
                        textSize={20}
                        align="justify"
                    >
                    Para recuperar sua senha, digite seu endereço de email no campo abaixo e enviaremos um link para seu email para que você recupere sua senha.
                    </TextLabel>

                    <View style={{marginTop: 50, marginBottom: 30}}>
                        <TextInput type="text" label="E-mail" textColor={AppStyles.colour.primaryColor} />
                    </View>

                    <ButtonInput>Confirmar</ButtonInput>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingHorizontal: 16,
        backgroundColor: "#FFFFFF"
    }
})