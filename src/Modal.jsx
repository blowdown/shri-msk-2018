import React from 'react';
import './modal.css';

const Modal = ({ icon = 'success', title, children }) => (
    <div className="modal">
        <div className="modal__dialog">
            <div className={`modal__icon modal__icon--${icon}`}></div>
            <div className="modal__title">
                {title.split('\n').map((item, key) => <span key={key}>{item}<br/></span>)}
            </div>
            <div className="modal__buttons">
                {children}
            </div>
        </div>
    </div>
);

export default Modal;
