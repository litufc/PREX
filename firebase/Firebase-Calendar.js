import * as firebase from 'firebase/app'
import "firebase/firestore";

const db = firebase.firestore()
let result

export const registerSchedules = async (schedules) => {
    let size = 0
    const batch = db.batch()

    await db.collection('users').doc('123456').collection('schedules').get()
    .then(snapshot => {

        snapshot.forEach((schedule) => {
            scheduleRef = db.collection('users').doc(schedule.data().prexId).collection('schedules').doc(schedule.id)
            batch.delete(scheduleRef)
        })
        
        schedules.forEach((schedule) => {
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
            console.log(error)
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