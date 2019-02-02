import React from 'react';
import './Button.css';

const Button = props => {

    const cls = [props.type];

    return (
        <div onClick={props.onClick} className={cls.join(' ')}> {props.label || 'BTN'} </div>
    );
};

export default Button;