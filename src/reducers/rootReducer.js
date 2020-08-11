import authReducder from './authReducer';
import projectReducer from './projectsReducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';


const rootReducer =combineReducers({auth:authReducder,projects:projectReducer,firestore:firestoreReducer,firebase:firebaseReducer});

export default rootReducer