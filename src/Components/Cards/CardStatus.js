import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, CardItem, Text, Grid, Col, Row } from 'native-base';

const CardStatus = ( { author, project, status } ) => {
    let cardColor, statusDescription;
    //1-PENDENTE  2-CONFIRMADO  3-CONCLUÍDO
    if(status === 1){
        cardColor = "#EE8C26";
        statusDescription = "PENDENTE";
    }else if(status === 2){
        cardColor = "#029B96";
        statusDescription = "CONFIRMADO";
    }else if(status === 3){
        cardColor = "#AAAAAA";
        statusDescription = "CONCLUÍDO";
    }

    const styles = StyleSheet.create({
        card: {
            backgroundColor: cardColor,
            borderRadius: 10,
            borderColor: cardColor,
            height: 132,
            marginBottom: 16
        },
        cardItem: {
            backgroundColor: cardColor,
            borderRadius: 10,
            height: 132
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
        }
    });
    return(
        <Card style={styles.card}>
            <TouchableOpacity>
                <CardItem style={styles.cardItem}>
                    <Grid>
                        <Row>
                            <Text style={styles.labelCard} numberOfLines={1}>{author}</Text>
                        </Row>
                        <Row style={{ marginTop: 10 }}>
                            <Col>
                                <Text style={styles.labelCardSubtitle} numberOfLines={1}>Projeto</Text>
                            </Col>
                            <Col style={{ alignItems: "flex-end" }}>
                                <Text style={styles.labelCardSubtitle} numberOfLines={1}>{project}</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text style={styles.labelCardSubtitle} numberOfLines={1}>Status</Text>
                            </Col>
                            <Col style={{ alignItems: "flex-end" }}>
                                <Text style={styles.labelCardSubtitle} numberOfLines={1}>{statusDescription}</Text>
                            </Col>
                        </Row>
                    </Grid>
                </CardItem>
            </TouchableOpacity>
        </Card>
    )
}

export default CardStatus;