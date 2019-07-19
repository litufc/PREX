import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, CardItem, Icon, Grid, Row } from 'native-base';

import AppStyles from '../../global';
import TextLabel from '../TextLabel';

const CardSmall = ( { icon, children, background, onPress } ) => {
    let backgroundColor;
    if(background)
        backgroundColor = background;
    else
        backgroundColor = AppStyles.colour.secundaryColor;
    const styles = StyleSheet.create({
        card: {
            backgroundColor: backgroundColor,
            borderRadius: 10,
            borderColor: backgroundColor,
            height: 128,
            marginBottom: 16
        },
        cardItem: {
            backgroundColor: backgroundColor,
            borderRadius: 10,
            height: 128
        },
        icon: {
            fontSize: 64,
            color: 'rgba(0, 0, 0, 0.3)',
            width: 'auto'
        },
        grid: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    });
    return(
        <Card style={styles.card}>
            <TouchableOpacity onPress={onPress}>
                <CardItem style={styles.cardItem}>
                    <Grid style={styles.grid}>
                        <Row style={{ height: 'auto' }}>
                            <Icon type="FontAwesome" name={icon} style={styles.icon}/>
                        </Row>
                        <Row>
                            <TextLabel 
                                textFont="Roboto_medium"
                                textSize={25}
                                textColor="#FFFFFF"
                                align="center"
                            >
                            {children}
                            </TextLabel>
                        </Row>
                    </Grid>
                </CardItem>
            </TouchableOpacity>
        </Card>
    )
}

export default CardSmall;