import authReducer from './authReducer';
import tripReducer from './tripReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    trip: tripReducer,
    firestore: firestoreReducer,
})

export default rootReducer;