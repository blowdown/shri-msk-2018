import './modal.css';

const Modal = props => (
    <div className="modal">
        <div className="modal__dialog">
            <div className={`modal__icon modal__icon--${props.icon || 'success'}`}></div>
            <div className="modal__title">
                {props.title.split('\n').map((item, key) => <span key={key}>{item}<br/></span>)}
            </div>
            <div className="modal__buttons">
                {props.children}
            </div>
        </div>
    </div>
);

export default Modal;
