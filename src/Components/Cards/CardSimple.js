import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Text, Icon, Grid, Row } from 'native-base';
import AppStyles from '../../global';

const CardSimple = ( { title, subtitle } ) => {
    const styles = StyleSheet.create({
        cardTitle: {
            backgroundColor: AppStyles.colour.secundaryColor,
            borderRadius: 10,
            borderColor: AppStyles.colour.secundaryColor,
            height: 81,
            marginBottom: 16
        },
        cardSubtitle: {
            backgroundColor: AppStyles.colour.secundaryColor,
            borderRadius: 10,
            borderColor: AppStyles.colour.secundaryColor,
            height: 100,
            marginBottom: 16
        },
        cardItem: {
            backgroundColor: AppStyles.colour.secundaryColor,
            borderRadius: 10,
            height: '100%',
            flex: 1,
            flexDirection: "column",
            justifyContent: "center"
        },
        cardItemSubtitle: {
            backgroundColor: AppStyles.colour.secundaryColor,
            borderRadius: 10,
            height: '100%',
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start"
        },
        labelCard: {
            fontFamily: 'Roboto_medium',
            fontSize: 25,
            color: '#FFFFFF'
        },
        labelCardSubtitle: {
            fontFamily: 'Roboto',
            fontSize: 20,
            color: '#6D6D6D',
            textAlign: 'center',
            marginTop: 5
        }
    });
    return(
        <>
            {!subtitle ? (
                <Card style={styles.cardTitle}>
                    <CardItem style={styles.cardItem}>
                        <Text numberOfLines={1} style={styles.labelCard}>{title}</Text>
                    </CardItem>
                </Card>
            ) : (
                <Card style={styles.cardSubtitle}>
                    <CardItem style={styles.cardItemSubtitle}>
                        <Text numberOfLines={1} style={styles.labelCard}>{title}</Text>
                        <Text numberOfLines={1} style={styles.labelCardSubtitle}>{subtitle}</Text>
                    </CardItem>
                </Card>
            )
            }
        </>
    )
}

export default CardSimple;