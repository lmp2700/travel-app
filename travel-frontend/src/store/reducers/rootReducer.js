import authReducer from './authReducer';
import tripReducer from './tripReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    trip: tripReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
})

export default rootReducer;