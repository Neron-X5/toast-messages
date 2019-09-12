import React, { useState } from 'react';

import './style.css';

const Toast = ({ msgId = 0, message = '', dismissToast }) => {
    const [isVisible, setIsVisible] = useState(false);

    if (!isVisible) {
        // Add animations
        setTimeout(() => {
            const $element = document.querySelector(`#item-${msgId}`);
            $element.classList.add('visible');
        }, 100);
        setIsVisible(true);
    }

    return (
        <div id={`item-${msgId}`} className='toast-item'>
            <span>{message}</span>
            <span
                onClick={() => {
                    dismissToast(msgId);
                }}
            >
                close
            </span>
        </div>
    );
};

export default Toast;
