import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Container, Content, ListItem, Body, Text, Radio, CheckBox} from 'native-base';

import AppStyles from '../../global';

const Options = ({options, maxAnswers, onPress, answers}) => {
    const styles = StyleSheet.create({
        containerTitle: {
            alignItems: "center",
            marginBottom: 16 
        },
        titleHeader: {
            fontFamily: 'Roboto_medium',
            color: 'white',
            fontSize: 23
        },
        container: {
            height: '100%',
            width: '100%',
            backgroundColor: AppStyles.colour.primaryColor
        },
        text: {
            color: 'white'
        }
    });

    return(
        <Container style={styles.container}>
            <Content>
                <FlatList
                    data={options}
                    renderItem={({item}) => 
                        <ListItem button onPress={onPress}>
                            {maxAnswers === 1 &&
                                <Radio color="white" selectedColor={AppStyles.colour.secundaryColor} selected={false} />
                            }
                            {maxAnswers > 1 &&
                                <CheckBox color="white" selectedColor={AppStyles.colour.secundaryColor} selected={false} />
                            }
                            <Body>
                                <Text style={styles.text}>{item}</Text>
                            </Body>
                        </ListItem>
                    }
                />
            </Content>
        </Container>
    )
}

export default Options;