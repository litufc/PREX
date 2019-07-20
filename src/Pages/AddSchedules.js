import React, { Component } from 'react';
import { Body, Title, Spinner, Toast, Container } from 'native-base';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { StyleSheet, ScrollView, Alert, View } from 'react-native';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import ButtonInput from '../Components/Inputs/ButtonInput';
import { registerSchedules, readSchedules } from '../../firebase/Firebase-Calendar';

LocaleConfig.locales['br'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['JAN.','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET.','OUT.','NOV','DEZ'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    dayNamesShort: ['DOM','SEG','TER','QUA','QUI','SEX','SAB'],
    today: 'Hoje\'HOJ'
  };
  LocaleConfig.defaultLocale = 'br';

export default class AddSchedules extends Component {

    constructor(props) {
        super(props);
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }

    componentWillMount() {

    }

    state = {
        markedDates: {
            
        },
        markedDatesArray: [],
        loading: false,
        showToast: false
    }

    clickOnDay = (day) => {
        let markedDates
        markedDates = this.state.markedDates
        markedDatesArray = this.state.markedDatesArray
        
        if(markedDates[day.dateString] == undefined || markedDates[day.dateString].selected == false) {
            markedDates[day.dateString] = {selected: true, color: AppStyles.colour.secundaryColor, textColor: 'white'}
            markedDatesArray.push(day.dateString)
            this.setState({markedDates: markedDates})
            this.setState({markedDatesArray: markedDatesArray})
        } else {
            markedDates[day.dateString] = {selected: false, color: AppStyles.colour.primaryColor, textColor: 'white'}
            index = markedDatesArray.indexOf(day.dateString)
            markedDatesArray.splice(index, 1)
            this.setState({markedDates: markedDates})
            this.setState({markedDatesArray: markedDatesArray})
        }

        console.log(this.state.markedDatesArray)
    }

    showAlert = () => {
        Alert.alert(
            'Adicionar Datas Marcadas',
            'Você tem certeza que deseja adicionar as datas marcadas como livres para agendamento?',
            [
                {
                    text: 'Não',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Sim',
                    onPress: this.addDaysToFirebase
                },
            ],
            {cancelable: false},
        );
    }

    addDaysToFirebase = async () => {
        this.setState({loading: true})
        const schedules = []

        this.state.markedDatesArray.forEach((date) => {
            for(i = 0; i < 5 ; i++) {
                if (i != 2) {
                    const start = (i*2) + 8
                    const end = start + 2
                    const schedule = {
                        id: date + '-' + start + ':00',
                        date: date,
                        time:  start + ':00 às ' + end + ':00',
                        prexName: 'Adrian Rausley Ferreira Pinto Júnior', //TROCAR ISSO DEPOIS
                        prexId: '123456',
                        coordinatorName: '',
                        coordinatorId: ''
                    }
                    schedules.push(schedule)
                }
            }
        })

        console.log(this.state.loading)

        let result = await registerSchedules(schedules)
        if (result == true) {
            this.setState({loading: false})
            Alert.alert(
                'Sucesso!',
                'As datas marcadas foram adicionadas com sucesso!',
                [
                    {
                        text: 'Ok',
                        onPress: () => this.props.navigation.navigate('Schedules')
                    },
                ],
                {cancelable: false},
            );
        } else {
            Alert.alert(
                'Erro!',
                'As datas marcadas não puderam ser adicionadas. Erro: ' + result,
                [
                    {
                        text: 'Ok'
                    },
                ],
                {cancelable: false},
            );
            this.setState({loading: false})
        }
    }

    render(){
        if(!this.state.loading) {
            return(
                <View>
                    <Toolbar 
                        title="Adicionar Horários" 
                        textColor="#FFFFFF" 
                        background={AppStyles.colour.primaryColor}
                        iconColor={AppStyles.colour.secundaryColor}
                        onPress={() => this.props.navigation.navigate('Schedules')}
                    />
                    <ScrollView style={styles.container}>
                        <Body style={styles.containerTitle}>
                            <Title style={styles.titleHeader}>Escolha as Datas Disponíveis</Title>
                        </Body>
                        <Calendar
                            minDate={Date()}
                            //maxDate={'2019-12-23'} //ALTERAR ISSO AQUI
                            onDayPress={this.clickOnDay}
                            monthFormat={'MM yyyy'}
                            markedDates={this.state.markedDates}
                            markingType={'period'}
                            monthFormat={'MMMM yyyy'}
                            theme={{
                                calendarBackground: AppStyles.colour.primaryColor,
                                backgroundColor: AppStyles.colour.primaryColor,
                                arrowColor: AppStyles.colour.secondaryColor,
                                todayTextColor: 'white',      
                                dayTextColor: 'white',
                                textDisabledColor: '#A1A1A1',
                                monthTextColor: 'white'                
                            }}
                        />
                        <View style={{marginTop: 30, marginBottom: 16}}>
                            <ButtonInput onPress={this.showAlert}>Adicionar Datas</ButtonInput>
                        </View>
                    </ScrollView>
                </View>
            );
        } else {
            return(
                <View style={styles.container}>
                    <Spinner style={styles.spinner} color={AppStyles.colour.secundaryColor}/>
                    <Body style={styles.containerTitle}>
                        <Title style={styles.titleHeader}>Salvando Datas...</Title>
                    </Body>
                </View>
            )            
        }
    }
}

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
    spinner: {
        marginTop: 32
    }
})