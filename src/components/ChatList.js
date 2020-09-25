import React from 'react';
import ChatMessage from './ChatMessage';


function ChatList({ messages }) {

    return (
        <div>
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        </div>
    );
}

export default ChatList;