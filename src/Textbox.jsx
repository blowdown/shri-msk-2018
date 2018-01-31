import React from 'react';
import './textbox.css';

const Textbox = ({
    value,
    showClear = true,
    placeholder,
    icon = null,
    onIconClick,
    onFocus,
    onChange = () => {}
}) => {
    const hasText = Boolean(value);
    const showClearIcon = hasText && showClear;

    return (
        <div className={`textbox ${icon || showClearIcon ? 'textbox--with-icon' : ''}`}>
            <input
                value={value}
                type="text"
                className="textbox__input"
                placeholder={placeholder}
                onChange={e => onChange(e.target.value)}
                onFocus={onFocus}
            />

            {!icon ? null :
                <button
                    className="textbox__icon"
                    data-type={icon}
                    onClick={onIconClick}
                />
            }

            {!(showClearIcon && !icon) ? null :
                <button
                    className="textbox__icon"
                    data-type="clear"
                    onClick={() => onChange('')}
                />
            }
        </div>
    );
};

export default Textbox;
