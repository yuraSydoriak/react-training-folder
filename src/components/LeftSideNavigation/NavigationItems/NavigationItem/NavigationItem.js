import React from 'react';
import './NavigationItem.css';

const NavigationItem = (props) => {
    return (
        <li className='NavigationItem'>
            <a href='#'>{props.link}</a>
        </li>
    );
};

export default NavigationItem;