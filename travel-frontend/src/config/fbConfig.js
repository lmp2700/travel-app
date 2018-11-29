import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyB2c2cl1hBQVEY1Qmoj_zkq4yLHiuFcGpo",
    authDomain: "travel-app-77bb5.firebaseapp.com",
    databaseURL: "https://travel-app-77bb5.firebaseio.com",
    projectId: "travel-app-77bb5",
    storageBucket: "travel-app-77bb5.appspot.com",
    messagingSenderId: "490345068681"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;