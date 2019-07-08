import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, Icon } from 'native-base';

import AppStyles from '../../global';

const ButtonInput = ( { children, direction } ) => {
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
        },
        iconRight: {
            paddingRight: 20,
            marginLeft: 0
        }
    });
    return(
        <>
            {!direction &&
                <Button rounded style={styles.button}>
                    <Text style={styles.labelButton}>{children}</Text>
                </Button>
            }

            {direction === "left" &&
                <Button rounded iconLeft style={styles.button}>
                    <Icon type="FontAwesome" name="arrow-left" />
                    <Text style={styles.labelButton}>{children}</Text>
                </Button>
            }

            {direction === "right" &&
                <Button rounded iconRight style={styles.button}>
                    <Text style={styles.labelButton}>{children}</Text>
                    <Icon type="FontAwesome" name="arrow-right" style={styles.iconRight} />
                </Button>
            }
            
        </>
    )
}

export default ButtonInput;