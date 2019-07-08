import React from 'react';
import { Font, Constants } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import Login from './src/Pages/Login';
import Menu from './src/Pages/Menu';

export default class App extends React.Component{
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
        });

        this.setState({ fontLoaded: true });
    }

    render(){
        return(
            <View style={styles.container}>
                {this.state.fontLoaded ? (
                    <Menu/>
                ) : null }
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight
    }
})