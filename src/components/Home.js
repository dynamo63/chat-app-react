import 'regenerator-runtime/runtime'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import React from 'react';
import 'firebase/firestore';
import { firebase } from '../config';
// import { firestore } from 'firebase';

// Composants
import ChatForm from './ChatForm';
import ChatList from './ChatList';


// Assets
import './home.css';
import logo from '../img/cover.png';



function Home() {
    const auth = firebase.auth()
    const storage = firebase.firestore()

    const signOut = () => {
        auth.signOut()
    }

    const messagesRef = storage.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(10);

    const [messages] = useCollectionData(query, { idField: 'id' });
    console.log(messages)

    const addMessage = async function (message) {
        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })
        
    }

    return (
        <>
            <header className="header">
                <div className="header__logo">
                    <img src={logo} width="120px" height="auto" />
                </div>
                <button className="header__btn button" onClick={signOut} >Sign Out</button>
            </header>
            <section className="room">
                <ChatList messages={messages} />
            </section>
            <footer className="footer-message">
                <ChatForm onAddMessage={addMessage} />
            </footer>
        </>
    );
}

export default Home;