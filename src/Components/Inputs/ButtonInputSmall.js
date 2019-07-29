import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, Icon } from 'native-base';

import AppStyles from '../../global';

const ButtonInputSmall = ( { children, direction, onPress, disabled } ) => {
    let buttonColor
    if(disabled) {
        buttonColor = '#AAAAAA'
    } else {
        buttonColor = AppStyles.colour.secundaryColor
    }
    const styles = StyleSheet.create({
        buttonRight: {
            height: 40,
            backgroundColor: buttonColor,
            width: '45%'
        },
        buttonLeft: {
            height: 40,
            backgroundColor: AppStyles.colour.secundaryColor,
            width: '45%'
        },
        labelButton: {
            fontFamily: 'Roboto',
            color: '#FFFFFF',
            fontSize: 16,
            textAlign: 'center'
        },
        iconRight: {
            marginLeft: 0
        },
        iconLeft: {
            marginRight: 0
        }
    });
    let button
    switch(direction) {
        case 'left':
            button = <Button rounded style={styles.buttonLeft} onPress={onPress}>
                        <Icon style={styles.iconLeft} type="FontAwesome" name="arrow-left" />
                        <Text style={styles.labelButton}>{children}</Text>
                     </Button>
                      
            break;
        case 'right':
            if(disabled) {
                button = <Button rounded style={styles.buttonRight} onPress={onPress} disabled>
                            <Text style={styles.labelButton}>{children}</Text>
                            <Icon style={styles.iconRight} type="FontAwesome" name="arrow-right"/>
                         </Button>
            } else {
                button = <Button rounded style={styles.buttonRight} onPress={onPress}>
                            <Text style={styles.labelButton}>{children}</Text>
                            <Icon style={styles.iconRight} type="FontAwesome" name="arrow-right"/>
                         </Button>
            }
            break;
        case 'final':
            button = <Button rounded style={styles.buttonRight} onPress={onPress} disabled={disabled}>
                        <Text style={styles.labelButton}>{children}</Text>
                        <Icon style={styles.icon} type="FontAwesome" name="check"/>
                     </Button>
            break;
    }
    return button
}

export default ButtonInputSmall;