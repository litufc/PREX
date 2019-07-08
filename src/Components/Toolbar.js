import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Body, Title, Left, Right, Container } from 'native-base';

const Toolbar = ( { title, textColor, background } ) => {
    const styles = StyleSheet.create({
        titleHeader: {
            fontFamily: 'Roboto_medium',
            color: textColor,
            fontSize: 23
        },
        header: {
            backgroundColor: background,
            elevation: 0,
            height: 80
        },
        containerTitle: {
            alignItems: "center"
        }
    });
    return(
        <Container>
        <Header style={styles.header}>
            <Body style={styles.containerTitle}>
                <Title style={styles.titleHeader}>{title}</Title>
            </Body>
        </Header>
        </Container>
    )
}

export default Toolbar;