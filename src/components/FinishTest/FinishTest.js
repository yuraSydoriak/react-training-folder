import React from 'react';
import './FinishTest.css';

const FinishTest = (props) => {
    return(
        <div className={'FinishTest'}>
            <ul>

            </ul>
            <button onClick={props.onTrymore}>Try more</button>
        </div>
    )
};

export default FinishTest;