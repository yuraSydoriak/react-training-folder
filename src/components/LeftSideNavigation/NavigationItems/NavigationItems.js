import React from 'react';
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => {
    return (
        <ul>
            {props.links.map( (link, index) => {
                return (
                    <NavigationItem link={link} key={index}/>
                )
            })}
        </ul>
    );
};

export default NavigationItems;