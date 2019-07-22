import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Container, Content, ListItem, Left, Right, Text, Radio} from 'native-base';

import AppStyles from '../../global';

const Options = ({options, maxAnswers}) => {
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
            paddingHorizontal: 16,
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
                        <ListItem>
                            <Left>
                                <Text style={styles.text}>{item}</Text>
                            </Left>
                            <Right>
                                {maxAnswers === 1 &&
                                    <Radio color="white" selectedColor={AppStyles.colour.secundaryColor} selected={false} />
                                }
                                {maxAnswers > 1 &&
                                    <CheckBox color="white" selectedColor={AppStyles.colour.secundaryColor} selected={false} />
                                }
                            </Right>
                        </ListItem>
                    }
                />
            </Content>
        </Container>
    )
}

export default Options;