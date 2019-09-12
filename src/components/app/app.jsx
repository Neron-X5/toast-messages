import React, { useState } from 'react';

import Toast from '../toast';

import './style.css';

const App = () => {
    const [messagesList, setMessages] = useState([]);
    const [toastCount, setToastCount] = useState(1);
    const autoCloseTime = 30000;

    const _showNextMessage = () => {
        const randomString = Math.random()
            .toString(36)
            .substr(2, 10);
        const id = toastCount;
        setToastCount(toastCount + 1);
        const tempMessagesList = [{ id, message: randomString }, ...messagesList];
        setMessages(tempMessagesList);
        setTimeout(() => {
            (id => {
                _dismissToast(id);
            })(id);
        }, autoCloseTime);
    };

    const _dismissToast = id => {
        setMessages(prevMessagesList => prevMessagesList.filter(msg => msg.id !== id));
    };

    const _renderMessages = () => {
        return messagesList.map((msg, index) => (
            <Toast
                key={msg.id}
                className='toast-container'
                msgId={msg.id}
                message={`${msg.id} - ${msg.message}`}
                autoCloseTime={autoCloseTime}
                dismissToast={_dismissToast}
            />
        ));
    };

    return (
        <div className='app'>
            <button className='button' onClick={_showNextMessage}>
                Show Next Message
            </button>
            {_renderMessages()}
        </div>
    );
};
export default App;
