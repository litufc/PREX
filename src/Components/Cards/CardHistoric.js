import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, CardItem, Text, Icon, Grid, Col, Row } from 'native-base';
import AppStyles from '../../global';

const CardHistoric = ( { author, office, date, onPress } ) => {
    const styles = StyleSheet.create({
        card: {
            backgroundColor: AppStyles.colour.secundaryColor,
            borderRadius: 10,
            borderColor: AppStyles.colour.secundaryColor,
            height: 100,
            marginBottom: 16
        },
        cardItem: {
            backgroundColor: AppStyles.colour.secundaryColor,
            borderRadius: 10,
            height: 100
        },
        icon: {
            fontSize: 20,
            color: 'rgba(0, 0, 0, 0.3)',
            width: 'auto',
            marginRight: 4
        },
        labelCard: {
            fontFamily: 'Roboto_medium',
            fontSize: 25,
            color: '#FFFFFF'
        },
        labelCardSubtitle: {
            fontFamily: 'Roboto_medium',
            fontSize: 20,
            color: '#FFFFFF'
        },
        gridColumnLeft: {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 5
        },
        gridColumnRight: {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 5
        },
    });
    return(
        <Card style={styles.card}>
            <TouchableOpacity onPress={onPress}>
                <CardItem style={styles.cardItem}>
                    <Grid>
                        <Row>
                            <Text style={styles.labelCard} numberOfLines={1}>{author}</Text>
                        </Row>
                        <Row>
                            <Col style={styles.gridColumnLeft}>
                                <Icon type="FontAwesome" name="user" style={styles.icon}/>
                                <Text style={styles.labelCardSubtitle} numberOfLines={1}>{office}</Text>
                            </Col>
                            <Col style={styles.gridColumnRight}>
                                <Icon type="FontAwesome" name="calendar" style={styles.icon}/>
                                <Text style={styles.labelCardSubtitle} numberOfLines={1}>{date}</Text>
                            </Col>
                        </Row>
                    </Grid>
                </CardItem>
            </TouchableOpacity>
        </Card>
    )
}

export default CardHistoric;