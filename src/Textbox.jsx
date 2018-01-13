import React from 'react';
import './textbox.css';

const Textbox = ({ placeholder = '' }) => (
    <div className="textbox" id="theme">
        <input type="text" className="textbox__input" placeholder={placeholder} />
    </div>
);

export default Textbox;
