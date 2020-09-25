import React from 'react';
// import 'firebase/auth'
import { firebase } from '../config'
import './chatMessage.css';


function ChatMessage(props) {
    const { text, photoURL, uid } = props.message;
    const messageClass = uid === firebase.auth().currentUser.uid ? 'sent' : 'received'

    return (
        <div className={`message message-${messageClass}`}>
            <div className="message-profil">
                <img src={photoURL} />
            </div>
            
            <div className="message-content">
                <p>{text}</p>
            </div>
            
        </div>
    );
}

export default ChatMessage;