import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// Firebase Config
import { firebase } from './config'
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

// Importation des composants
import SignIn from './components/SignIn';
import Home from './components/Home';

const auth = firebase.auth()
// const firestore = firebase.firestore()


function App() {
    const [user] = useAuthState(auth);

    return user ?  <Home /> : <SignIn />
}

ReactDOM.render(<App/>, document.getElementById('root'))