import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Body, Title, Left, Right, Icon } from 'native-base';

const Toolbar = ({ title, textColor, background, iconColor, onPress }) => {
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
            marginLeft: -36
        },
        leftContainer: {
            flex: 0,
            paddingLeft: 10,
            width: 60
        },
        iconBack: {
            color: iconColor
        }
    });
    return(
        <Header style={styles.header}>
            <Left style={styles.leftContainer}>
                {iconColor &&
                    <TouchableOpacity onPress={onPress}>
                        <Icon type="FontAwesome" name="arrow-left" size={23} style={styles.iconBack} />
                    </TouchableOpacity>
                }
            </Left>
            <Body style={styles.containerTitle}>
                <Title style={styles.titleHeader}>{title}</Title>
            </Body>
        </Header>
    )
}

export default Toolbar;