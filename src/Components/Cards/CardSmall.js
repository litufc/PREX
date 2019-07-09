import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Text, Icon, Grid, Row } from 'native-base';
import AppStyles from '../../global';

const CardSmall = ( { icon, children } ) => {
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
            width: 'auto'
        },
        labelCard: {
            fontFamily: 'Roboto_medium',
            fontSize: 25,
            color: '#FFFFFF',
            textAlign: 'center',
        },
        grid: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    });
    return(
        <Card style={styles.card}>
            <CardItem style={styles.cardItem}>
                <Grid style={styles.grid}>
                    <Row style={{ height: 'auto' }}>
                        <Icon type="FontAwesome" name={icon} style={styles.icon}/>
                    </Row>
                    <Row>
                        <Text style={styles.labelCard}>{children}</Text>
                    </Row>
                </Grid>
            </CardItem>
        </Card>
    )
}

export default CardSmall;