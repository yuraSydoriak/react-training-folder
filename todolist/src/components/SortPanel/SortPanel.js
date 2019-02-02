import React from 'react';
import './SortPanel.css';
import Button from "../UI/Button/Button";

const SortPanel = () => {
    return(
        <div className='SortPanel'>
            <Button type='button' label='All' />
            <Button type='button' label='To Do' />
            <Button type='button' label='Done' />
        </div>
    );
};

export default SortPanel;