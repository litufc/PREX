import { initFirebase } from './Firebase.config'
import * as firebase from 'firebase/app'
import "firebase/firestore";

initFirebase();

export const registerSchedule = (schedule) => {
    firebase.firestore().collection('schedules').add(schedule)
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}

export const updateSchedule = (schedule) => {
    firebase.firestore().collection('schedules').doc(schedule.id).set({
        name: schedule.name,
        questions: schedule.questions,
        answers: schedule.answers
    })
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}

export const deleteSchedule = (scheduleId) => {
    firebase.firestore().collection('schedules').doc(scheduleId).delete()
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}

export const readSchedule = (scheduleId) => {
    firebase.firestore().collection('schedules').doc(scheduleId).get()
    .then((schedule) => {
        if (schedule.exists) {
            return schedule 
        } else {
            return null
        }
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}