import React from 'react';
import './AnswerItem.css'

const AnswerItem = (props) => {
    const itemClasses = ['AnswerItem'];


    return(
        <li className={itemClasses.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
};

export default AnswerItem;