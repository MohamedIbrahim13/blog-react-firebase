import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import {getFirebase,ReactReduxFirebaseProvider} from 'react-redux-firebase';
import {reduxFirestore,getFirestore,createFirestoreInstance} from 'redux-firestore';
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app';



const store = createStore(rootReducer,compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),reduxFirestore(firebase,fbConfig)));
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    attachAuthIsReady: true
};
  
  
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};
// const rrfProps = {
//     firebase,
//     config: fbConfig,
//     dispatch: store.dispatch,
//     createFirestoreInstance
// };

ReactDOM.render(<Provider store={store}><ReactReduxFirebaseProvider {...rrfProps}><App /></ReactReduxFirebaseProvider></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

