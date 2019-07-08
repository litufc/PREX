import React from 'react';
import { Font, Constants } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import Login from './src/Pages/Login';

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
                    <Login/>
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