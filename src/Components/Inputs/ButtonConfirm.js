import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

import AppStyles from '../../global';

const ButtonConfirm = ( { children } ) => {
    const styles = StyleSheet.create({
        button: {
            height: 40,
            backgroundColor: AppStyles.colour.secundaryColor,
            width: '100%',
            flex: 1,
            alignItems: 'center'
        },
        labelButton: {
            fontFamily: 'Roboto',
            color: '#FFFFFF',
            fontSize: 20,
            textAlign: 'center'
        }
    });
    return(
        <Button rounded style={styles.button}>
            <Text style={styles.labelButton}>{children}</Text>
        </Button>
    )
}

export default ButtonConfirm;