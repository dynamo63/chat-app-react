import React from 'react';
import 'firebase/auth'
import { firebase } from '../config'

// Importation des assets 
import './signIn.css';
import img from '../img/conversation.png'

function SignIn() {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    }

    return (
        <div className="main">
            <h1 className="main-title heading-1">Bienvenue sur DyChat</h1>
            <img src={img} className="responsive-img" />
            <h1 className="main-title heading-1">Ouvrez votre coeur à d'autres personnes</h1>
            <button className="button" onClick={signInWithGoogle}>Continuer avec Google</button>
        </div>
    );
}

export default SignIn;