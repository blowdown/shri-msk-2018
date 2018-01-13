import React from 'react';
import './textbox.css';

class Textbox extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { value: '' };
    }

    render() {
        const { showClear = true, placeholder, icon = null, onIconClick, onFocus, onBlur } = this.props;

        const hasText = this.state.value;
        const showClearIcon = hasText && showClear;

        return (
            <div className={`textbox ${icon || showClearIcon ? 'textbox--with-icon' : ''}`}>
                <input
                    value={this.state.value}
                    type="text"
                    className="textbox__input"
                    placeholder={placeholder}
                    onChange={e => this.setState({ value: e.target.value })}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    />

                { !icon ? null :
                    <button
                        className="textbox__icon"
                        data-type={icon}
                        onClick={onIconClick}/>
                }

                { !(showClearIcon && !icon) ? null :
                    <button
                        className="textbox__icon"
                        data-type="clear"
                        onClick={() => this.setState({ value: '' })}
                        />
                }
            </div>
        );
    }
}
export default Textbox;
