import * as firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

export const initFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDGAt0ecEisf660HKRg5m2whPZlhbLd1p4",
        authDomain: "app-prex.firebaseapp.com",
        databaseURL: "https://app-prex.firebaseio.com",
        projectId: "app-prex",
        messagingSenderId: "877401896118",
        appId: "1:877401896118:web:f95726d8443bac28"
    }
    
    firebase.initializeApp(firebaseConfig);
}

