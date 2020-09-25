import React, { useState } from 'react';
import { AiOutlineSend as SendButton } from 'react-icons/ai';

function ChatForm({ onAddMessage }) {

    const [value, setFormValue] = useState('');
    const handleSubmit = async(e) => {
        e.preventDefault();
        await onAddMessage(value);
        setFormValue('')
    }

    return (
        <form className="input-field" onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(e) => setFormValue(e.target.value)} className="input-message" placeholder="Tapez quelques chose de gentille" />
            <button type="submit" className="input-btn">
                <SendButton color={'#ffffff'} />
            </button>
        </form>
    );
}

export default ChatForm;