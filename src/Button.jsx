import React from 'react';
import './button.css';

const Button = ({ primary, onClick, children }) => (
    <button onClick={onClick} className={`button ${primary ? 'button--primary' : ''}`}>
        {children}
    </button>
);

export default Button;
