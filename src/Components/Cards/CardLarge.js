import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, CardItem, Icon, Grid, Col } from 'native-base';

import AppStyles from '../../global';
import TextLabel from '../TextLabel';

const CardLarge = ( { icon, children, onPress } ) => {
    const styles = StyleSheet.create({
        card: {
            backgroundColor: AppStyles.colour.secundaryColor,
            borderRadius: 10,
            borderColor: AppStyles.colour.secundaryColor,
            height: 128,
            marginBottom: 16
        },
        cardItem: {
            backgroundColor: AppStyles.colour.secundaryColor,
            borderRadius: 10,
            height: 128
        },
        icon: {
            fontSize: 64,
            color: 'rgba(0, 0, 0, 0.3)',
            width: 133,
            paddingLeft: 20
        }
    });
    return(
        <Card style={styles.card}>
            <TouchableOpacity onPress={onPress}>
                <CardItem style={styles.cardItem}>
                    <Grid>
                        <Col style={{ width: 90 }}>
                            <Icon type="FontAwesome5" name={icon} style={styles.icon}/>
                        </Col>
                        <Col style={{ justifyContent: 'center' }}>
                            <TextLabel 
                                textFont="Roboto_medium"
                                textSize={25}
                                textColor="#FFFFFF"
                                align="center"
                                style={{ marginHorizontal: 10 }}
                            >
                            {children}
                            </TextLabel>
                        </Col>
                    </Grid>
                </CardItem>
            </TouchableOpacity>
        </Card>
    )
}

export default CardLarge;