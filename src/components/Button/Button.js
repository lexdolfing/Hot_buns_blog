import React from 'react';
import styles from './Button.module.css';


export default function Button({button_content, onClick, type}) {
    return (
        <button
        type={type}
        onClick={onClick}
        >
            {button_content}
        </button>

    )
}
