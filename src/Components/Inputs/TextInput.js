import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Input, Label } from 'native-base';

const TextInput = ( { label, textColor, type } ) => {
    const styles = StyleSheet.create({
        item: {
            borderBottomColor: textColor,
            borderBottomWidth: 2
        },
        label: {
            color: textColor
        },
        input: {
            fontSize: 16,
            color: "#6D6D6D"
        }
    });
    return(
        <Item floatingLabel style={styles.item}>
            <Label style={styles.label}>{label}</Label>
            {type === "text" &&
                <Input style={styles.input}/>
            }
            {type === "password" &&
                <Input style={styles.input} secureTextEntry={true}/>
            }
        </Item>
    )
}

export default TextInput;