import React from 'react';
import './Header.css';

const Header = props => {
    return (
        <div className="Header">
            <h1>List</h1>
            <span>To do: {props.todo}, Done: {props.done}</span>
        </div>
    );
}

export default Header;