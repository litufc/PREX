import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Body, Title, Left, Icon, Right } from 'native-base';

const Toolbar = ({ title, textColor, background, iconColor, iconRight, onPress }) => {
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
        },
        leftContainer: {
            flex: 0,
            paddingLeft: 10,
            width: 50
        },
        rightContainer: {
            flex: 0,
            paddingRight: 10,
            width: 50
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
            <Right style={styles.rightContainer}>
                {iconRight &&
                    <TouchableOpacity>
                        <Icon type="FontAwesome" name="trash" size={23} style={{color: "#EB5425"}} />
                    </TouchableOpacity>
                }
            </Right>
        </Header>
    )
}

export default Toolbar;