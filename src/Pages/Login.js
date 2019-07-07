import React, { Component } from 'react';

import { Container } from 'native-base';

import Toolbar from '../Components/Toolbar';

export default class Login extends Component {
    render(){
        return(
            <Container>
                <Toolbar title="Início"/>
            </Container>
        );
    }
}