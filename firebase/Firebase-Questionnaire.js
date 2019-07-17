import { initFirebase } from './Firebase.config'
import * as firebase from 'firebase/app'
import "firebase/firestore";

initFirebase();

export const registerQuestionnaire = (questionnaire) => {
    firebase.firestore().collection('questionnaires').add(questionnaire)
        .then(() => {
            console.log('Deu Certo')
        })
        //Não deu certo
        .catch(() => {
            console.log('Deu Errado')
        });
}

export const registerQuestion = (question) => {

}

export const registerAnswer = (answer) => {

}

export const updateQuestionnaire = (questionnaire) => {

}

export const updateQuestion = (question) => {

}

export const updateAnswer = (answer) => {

}

export const deleteQuestionnaire = (questionnaireId) => {

}

export const deleteQuestion = (questionId) => {

}

export const deleteAnswer = (answerId) => {

}

export const readQuestionnaire = (questionnaireId) => {

}

export const readQuestion = (questionId) => {

}

export const readDelete = (answerId) => {

}
