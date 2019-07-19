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
    firebase.firestore().collection('questions').add(question)
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}

export const registerAnswer = (answer) => {
    firebase.firestore().collection('answers').add(answer)
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}

export const updateQuestionnaire = (questionnaire) => {
    firebase.firestore().collection('questionnaires').doc(questionnaire.id).set({
        name: questionnaire.name,
        questions: questionnaire.questions,
        answers: questionnaire.answers
    })
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}

export const updateQuestion = (question) => {
    firebase.firestore().collection('questions').doc(question.id).set({
        question: question.question,
        options: question.options,
        textOption: question.textOption,
        minAnswers: question.minAnswers,
        maxAnswers: question.maxAnswers
    })
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}

export const updateAnswer = (answer) => {
    firebase.firestore().collection('answers').doc(answer.id).set({
        questionId: answer.questionId,
        questionNumber: answer.questionNumber,
        questionnaireId: answer.questionnaireId,
        chosenOptions: answer.chosenOptions,
        textAnswer: answer.textAnswer
    })
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}

export const deleteQuestionnaire = (questionnaireId) => {
    firebase.firestore().collection('questionnaires').doc(questionnaireId).delete()
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}

export const deleteQuestion = (questionId) => {
    firebase.firestore().collection('questions').doc(questionId).delete()
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}

export const deleteAnswer = (answerId) => {
    firebase.firestore().collection('answers').doc(answerId).delete()
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}

export const readQuestionnaire = (questionnaireId) => {
    firebase.firestore().collection('questionnaires').doc(questionnaireId).get()
    .then((questionnaire) => {
        if (questionnaire.exists) {
            return questionnaire
        } else {
            return null
        }
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}

export const readQuestion = (questionId) => {
    firebase.firestore().collection('questions').doc(questionId).get()
    .then((question) => {
        if (question.exists) {
            return question
        } else {
            return null
        }
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}

export const readAnswer = (answerId) => {
    firebase.firestore().collection('answers').doc(answerId).get()
    .then((answer) => {
        if (answer.exists) {
            return answer
        } else {
            return null
        }
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}
