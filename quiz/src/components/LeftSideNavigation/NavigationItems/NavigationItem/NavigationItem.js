import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavigationItem.css';

const NavigationItem = (props) => {
    return (
        <li className='NavigationItem'>
            <NavLink
                to={props.link.to}
                onClick={props.onLinkClick}
                exact={props.link.exact}
            >
                {props.link.label}
            </NavLink>
        </li>
    );
};

export default NavigationItem;