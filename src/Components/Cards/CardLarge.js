import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Text, Icon, Grid, Col } from 'native-base';
import AppStyles from '../../global';

const TextLabel = ( { icon, children } ) => {
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
        },
        labelCard: {
            fontFamily: 'Roboto_medium',
            fontSize: 25,
            color: '#FFFFFF',
            textAlign: 'center'
        }
    });
    return(
        <Card style={styles.card}>
            <CardItem style={styles.cardItem}>
                <Grid>
                    <Col style={{ width: 80 }}>
                        <Icon type="FontAwesome" name={icon} style={styles.icon}/>
                    </Col>
                    <Col style={{ justifyContent: 'center' }}>
                        <Text style={styles.labelCard}>{children}</Text>
                    </Col>
                </Grid>
            </CardItem>
        </Card>
    )
}

export default TextLabel;