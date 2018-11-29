import authReducer from './authReducer';
import tripReducer from './tripReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    trip: tripReducer
})

export default rootReducer;