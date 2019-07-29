import React, { Component } from 'react';
import { Spinner } from 'native-base';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { StyleSheet, ScrollView, Alert, View } from 'react-native';
import moment from 'moment';

import AppStyles from '../../global';
import Toolbar from '../../Components/Toolbar';
import ButtonInput from '../../Components/Inputs/ButtonInput';
import Title from '../../Components/Title';
import { registerSchedules, readSchedules } from '../../../firebase/Firebase';

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

    state = {
        markedDates: {
            
        },
        markedDatesArray: [],
        loading: false,
        loadingText: '',
        showToast: false
    }

    componentDidMount() {
        this.loadSchedules()
    }

    async loadSchedules() {
        markedDates = this.state.markedDates
        markedDatesArray = this.state.markedDatesArray

        this.setState({loading: true, loadingText: 'Carregando Calendário...'})
        const schedules = await readSchedules('123456')
        if(schedules != undefined) {
            schedules.forEach((schedule) => {
                if(moment(schedule.date, "YYYY-MM-DD").diff(moment(new Date(), "YYYY-MM-DD"), 'days') >= 0) {
                    markedDates[schedule.date] = {selected: true, color: AppStyles.colour.secundaryColor, textColor: 'white'}
                    if(markedDatesArray.indexOf(schedule.date) == -1) {
                        markedDatesArray.push(schedule.date)
                    }
                    this.setState({markedDates: markedDates, markedDatesArray: markedDatesArray})
                }
            })
        }
        this.setState({loading: false})
    }

    clickOnDay = (day) => {
        markedDates = this.state.markedDates
        markedDatesArray = this.state.markedDatesArray
        
        if(markedDates[day.dateString] == undefined || markedDates[day.dateString].selected == false) {
            markedDates[day.dateString] = {selected: true, color: AppStyles.colour.secundaryColor, textColor: 'white'}
            markedDatesArray.push(day.dateString)
            this.setState({markedDates: markedDates, markedDatesArray: markedDatesArray})
        } else {
            markedDates[day.dateString] = {selected: false, color: AppStyles.colour.primaryColor, textColor: 'white'}
            index = markedDatesArray.indexOf(day.dateString)
            markedDatesArray.splice(index, 1)
            this.setState({markedDates: markedDates, markedDatesArray: markedDatesArray})
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
        this.setState({loading: true, loadingText: 'Carregando Calendário...'})
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
                        <Title text="Escolha as Datas Disponíveis"/>
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