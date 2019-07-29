import * as firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDGAt0ecEisf660HKRg5m2whPZlhbLd1p4",
    authDomain: "app-prex.firebaseapp.com",
    databaseURL: "https://app-prex.firebaseio.com",
    projectId: "app-prex",
    messagingSenderId: "877401896118",
    appId: "1:877401896118:web:f95726d8443bac28"
}

firebase.initializeApp(firebaseConfig);

db = firebase.firestore()
let result

// ----------------------------- QUESTIONÁRIO ----------------------------- //

export const registerQuestionnaire = (questionnaire) => {
    db.collection('questionnaires').add(questionnaire)
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}

export const registerQuestion = (question) => {
    db.collection('questions').add(question)
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}

export const registerAnswer = (answer) => {
    db.collection('answers').add(answer)
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}

export const updateQuestionnaire = (questionnaire) => {
    db.collection('questionnaires').doc(questionnaire.id).set({
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
    db.collection('questions').doc(question.id).set({
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
    db.collection('answers').doc(answer.id).set({
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
    db.collection('questionnaires').doc(questionnaireId).delete()
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}

export const deleteQuestion = (questionId) => {
    db.collection('questions').doc(questionId).delete()
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}

export const deleteAnswer = (answerId) => {
    db.collection('answers').doc(answerId).delete()
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}

export const readQuestionnaire = async (questionnaireId) => {
    let result
    await db.collection('questionnaires').doc(questionnaireId).get()
    .then((questionnaire) => {
        if (questionnaire.exists) {
            result = questionnaire.data()
        } else {
            result = null
        }
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
    return result
}

export const readQuestion = async (questionId) => {
    let result
    await db.collection('questions').doc(questionId).get()
    .then((question) => {
        if (question.exists) {
            result = question.data()
        } else {
            result = null
        }
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
    return result
}

export const readAnswer = async (answerId) => {
    let result
    await db.collection('answers').doc(answerId).get()
    .then((answer) => {
        if (answer.exists) {
            result = answer.data()
        } else {
            result = null
        }
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
    return result
}

// ----------------------------- CALENDÁRIO ----------------------------- //

export const registerSchedules = async (schedules) => {
    let result
    const batch = db.batch()

    await db.collection('users').doc('123456').collection('schedules').get()
    .then(snapshot => {
        snapshot.forEach((schedule) => {
            console.log("AQUIIII 1")
            scheduleRef = db.collection('users').doc(schedule.data().prexId).collection('schedules').doc(schedule.id)
            batch.delete(scheduleRef)
        })
        
        schedules.forEach((schedule) => {
            console.log(schedule)
            scheduleRef = db.collection('users').doc(schedule.prexId).collection('schedules').doc(schedule.id)
            batch.set(scheduleRef, {
                date: schedule.date,
                time: schedule.time,
                prexName: schedule.prexName,
                prexId: schedule.prexId,
                coordinatorName: schedule.coordinatorName,
                coordinatorId: schedule.coordinatorName
            })
        })

        result = batch.commit()
        .then(() => {
            return true
        })
        .catch((error) => {
            console.log("ERROR -> " + error)
            return error
        })
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });

    return result
}

export const updateSchedule = async (userId, schedule) => {
    db.collection('users').doc(userId).collection('schedules').doc(schedule.id).set({
        date: schedule.date,
        time: schedule.time,
        prexName: schedule.prexName,
        prexId: schedule.prexId,
        coordinatorName: schedule.coordinatorName,
        coordinatorId: schedule.coordinatorName
    })
    .then(() => {
        console.log('Deu Certo')
        return true
    })
    //Não deu certo
    .catch((error) => {
        console.log('Deu Errado')
        return error
    });
}

export const deleteSchedule = async (userId, scheduleId) => {
    db.collection('users').doc(userId).collection('schedules').doc(scheduleId).delete()
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}

export const clearSchedule = async () => {
    const batch = db.batch()

    
}

export const readSchedule = async (userId, scheduleId) => {
    let result

    db.collection('users').doc(userId).collection('schedules').doc(scheduleId).get()
    .then((schedule) => {
        if (schedule.exists) {
            result = schedule 
        } else {
            result = null
        }
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });

    return result
}

export const readSchedules = async (userId) => {
    const schedules = []
    let result

    await db.collection('users').doc(userId).collection('schedules').get()
    .then(snapshot => {

        snapshot.forEach((schedule) => {
            schedules.push(schedule.data())
            result = schedules
        })

    })
    .catch(err => {
      console.log('Error getting documents', err);
    });

    return result
}