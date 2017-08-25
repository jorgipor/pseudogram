import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
	apiKey: "AIzaSyD8ChSIf91bNOUT66KJDebcTWKxw0J4j9k",
    authDomain: "pseudogram-27eb0.firebaseapp.com",
    databaseURL: "https://pseudogram-27eb0.firebaseio.com",
    projectId: "pseudogram-27eb0",
    storageBucket: "pseudogram-27eb0.appspot.com",
    messagingSenderId: "481409389323"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
