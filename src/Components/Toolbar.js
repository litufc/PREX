import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Body, Title } from 'native-base';

const Toolbar = ( { title } ) => {
    return(
        <Header>
            <Body>
                <Title style={styles.titleHeader}>{title}</Title>
            </Body>
        </Header>
    )
}

export default Toolbar;

const styles = {
    titleHeader: {
        fontFamily: 'Roboto'
    },
    header: {
        backgroundColor: '#000000'
    }
}