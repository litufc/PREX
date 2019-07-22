import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { Spinner } from 'native-base';

import Toolbar from '../Components/Toolbar';
import Options from '../Components/Questionnaire/Options';
import TextInput from '../Components/Inputs/TextInput';
import TextLabel from '../Components/TextLabel';
import Title from '../Components/Title';
import AppStyles from '../global';
import { readQuestionnaire } from './../../firebase/Firebase';

export default class Questionnaire extends Component {
    constructor(props){
        super(props);
        const userType = this.props.navigation.getParam('user', 0)
        this.state = {
            userType: userType
        }
    }

    componentWillMount() {
        this.loadQuestionnaire()
    }

    state = {
        loading: false,
        loadingText: '',
        questionnaire: {
            name: '',
            questions: [],
            answers: []
        },
        questionNumber: 1
    }

    showBackAlert = () => {
        Alert.alert(
            'Voltar',
            'Você tem certeza que deseja voltar para a página anterior? Você perderá todo o processo do questionário atual.',
            [
                {
                    text: 'Não',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Sim',
                    onPress: () => this.props.navigation.navigate('Questionnaires')
                },
            ],
            {cancelable: false},
        );
    }

    loadQuestionnaire = async () => {
        this.setState({loading: true, loadingText: 'Carregando Questionário...'})
        let questionnaireId = '';
        switch (this.state.userType) {
            case 0:
                questionnaireId = 'prex'
                break;
            case 1:
                questionnaireId = 'coordenador'
                break;
            case 2:
                questionnaireId = 'bolsista'
                break;
            case 3:
                questionnaireId = 'comunidade'
                break; 
        }
        const questionnaire = await readQuestionnaire(questionnaireId)
        this.setState({questionnaire: questionnaire, loading: false})
    }

    render(){
        console.log(this.state.questionNumber)
        if(!this.state.loading) {
            const question = this.state.questionnaire.questions[1]
            
            return(
                <View>
                    {this.state.userType === 0 &&
                        <Toolbar 
                            title="Coordenador da Prex" 
                            textColor="#FFFFFF" 
                            background={AppStyles.colour.primaryColor}
                            iconColor={AppStyles.colour.secundaryColor}
                            onPress={this.showBackAlert}
                        />
                    }
                    {this.state.userType === 1 &&
                        <Toolbar 
                            title="Coordenador" 
                            textColor="#FFFFFF" 
                            background={AppStyles.colour.primaryColor}
                            iconColor={AppStyles.colour.secundaryColor}
                            onPress={this.showBackAlert}
                        />
                    }
                    {this.state.userType === 2 &&
                        <Toolbar 
                            title="Bolsista" 
                            textColor="#FFFFFF" 
                            background={AppStyles.colour.primaryColor}
                            iconColor={AppStyles.colour.secundaryColor}
                            onPress={this.showBackAlert}
                        />
                    }
                    {this.state.userType === 3 &&
                        <Toolbar 
                            title="Membro da Comunidade" 
                            textColor="#FFFFFF" 
                            background={AppStyles.colour.primaryColor}
                            iconColor={AppStyles.colour.secundaryColor}
                            onPress={this.showBackAlert}
                        />
                    }
                    <ScrollView style={styles.container}>
                        <TextLabel textColor="white" textSize={20} textFont="Roboto" align="center">{question.title}</TextLabel>

                        <View style={styles.spinner}>
                            {question.options.length > 1 &&
                                <Options options={question.options} maxAnswers={question.maxAnswers} />
                            }
                            {question.textOption === true &&
                                <TextInput type="text" textColor="white" label={question.options[question.options.length-1]} />
                            }
                            {this.state.number > 1 &&
                                <TextInput type="text" textColor="white" label={question.options[question.options.length-1]} />
                            }
                            {this.state.number < this.state.questionnaire.questions.length &&
                                <TextInput type="text" textColor="white" label={question.options[question.options.length-1]} />
                            }
                            {this.state.number === this.state.questionnaire.questions.length &&
                                <TextInput type="text" textColor="white" label={question.options[question.options.length-1]} />
                            }
                        </View>
                    </ScrollView>
                </View>
            )
        } else {
            return(
                <View style={styles.container}>
                    <Spinner style={styles.spinner} color={AppStyles.colour.secundaryColor}/>
                    <Title text={this.state.loadingText}/>
                </View>
            )    
        }
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingHorizontal: 16,
        backgroundColor: AppStyles.colour.primaryColor
    },
    spinner: {
        marginTop: 32
    }
})