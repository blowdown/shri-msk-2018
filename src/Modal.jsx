import React from 'react';
import './modal.css';

const Modal = ({ icon = 'success', title, description = '', children }) => (
    <div className="modal">
        <div className="modal__dialog">
            <div className={`modal__icon modal__icon--${icon}`}></div>
            <div className="modal__title">
                {title.split('\n').map((item, key) => <span key={key}>{item}<br/></span>)}
            </div>
            <div className="modal__description">
                {description.split('\n').map((item, key) => <div key={key} className="modal__description-line">{item}</div>)}
            </div>
            <div className="modal__buttons">
                {children}
            </div>
        </div>
    </div>
);

export default Modal;
