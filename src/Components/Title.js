import React from 'react';
import { StyleSheet } from 'react-native';
import { Body, Title } from 'native-base';

const TextLabel = ({text}) => {
    const styles = StyleSheet.create({
        containerTitle: {
            alignItems: "center",
            marginBottom: 16 
        },
        titleHeader: {
            fontFamily: 'Roboto_medium',
            color: 'white',
            fontSize: 23
        }
    });
    return(
        <Body style={styles.containerTitle}>
            <Title style={styles.titleHeader}>{text}</Title>
        </Body>
    )
}

export default TextLabel;