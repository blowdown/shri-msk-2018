import './button.css';

const Button = props => (
    <button {...props} className={`button ${props.primary ? 'button--primary' : ''}`}>
        {props.children}
    </button>
);

export default Button;
