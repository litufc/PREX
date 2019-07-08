import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Body, Title, Left, Right, Container, Icon } from 'native-base';

const Toolbar = ( { title, textColor, background, iconColor } ) => {
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
            alignItems: "center",
            marginLeft: -20
        },
        leftContainer: {
            flex: 0,
            paddingLeft: 10,
            width: 36
        },
        iconBack: {
            color: iconColor
        }
    });
    return(
        <Container>
        <Header style={styles.header}>
            <Left style={styles.leftContainer}>
                {iconColor &&
                    <Icon type="FontAwesome" name="arrow-left" size={23} style={styles.iconBack}/>
                }
            </Left>
            <Body style={styles.containerTitle}>
                <Title style={styles.titleHeader}>{title}</Title>
            </Body>
        </Header>
        </Container>
    )
}

export default Toolbar;