import React from 'react';
import './Input.css';

const Input = props => {
    return(
        <input
            className={props.className || 'default'}
            type={props.type || 'text'}
            placeholder={props.placeholder || 'Type here...'}
            onChange={props.onChange}
        />
    );
};

export default Input;