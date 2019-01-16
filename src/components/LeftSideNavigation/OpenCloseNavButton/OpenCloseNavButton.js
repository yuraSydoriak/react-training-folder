import React from 'react';
import './OpenCloseNavButton.css';

const OpenCloseNavButton = props => {

    const cls = [
        'OpenCloseNavButton',
        'fa'
    ];

    if (props.isOpen){
        cls.push('fa-times')
        cls.push('opened')
    } else {
        cls.push('fa-bars')
    }

    return (
        <i className={cls.join(' ')} onClick={props.onClick} />
    );
}

export default OpenCloseNavButton;