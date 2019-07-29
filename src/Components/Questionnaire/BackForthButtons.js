import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Left, Right, Content } from 'native-base';

import AppStyles from '../../global';
import ButtonInputSmall from '../Inputs/ButtonInputSmall';

const BackForthButtons = ( { step, onPressBack, onPressForth, disabled } ) => {
    const styles = StyleSheet.create({
        container: {
            height: 40,
            backgroundColor: AppStyles.colour.primaryColor,
            width: '100%',
            marginTop: 32,
            flex: 1,
            flexDirection: 'row-reverse',
            justifyContent: 'space-between'
        },
    });
    let buttons
    switch(step) {
        case 'start':
            buttons = <View style={styles.container}>
                        <ButtonInputSmall direction='right' onPress={onPressForth} disabled={disabled}>
                            Próximo
                        </ButtonInputSmall>
                      </View>
                      
            break;
        case 'mid':
            buttons = <View style={styles.container}>
                        <ButtonInputSmall direction='right' onPress={onPressForth} disabled={disabled}>
                            Próximo
                        </ButtonInputSmall>
                        <ButtonInputSmall direction='left' onPress={onPressBack}>
                            Anterior
                        </ButtonInputSmall>
                      </View>
            break;
        case 'end':
            buttons = <View style={styles.container}>
                        <ButtonInputSmall direction='final' onPress={onPressForth} disabled={disabled}>
                            Concluir
                        </ButtonInputSmall>
                        <ButtonInputSmall direction='left' onPress={onPressBack}>
                            Anterior
                        </ButtonInputSmall>
                      </View>
            break;
    }
    return buttons
}

export default BackForthButtons;