import React from 'react';
import './AnswerList.css'
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = (props) => {
    return (
        <ul className={'AnswerList'}>
            {props.answers.map((answer, index) => {
                return (
                    <AnswerItem
                        key = {index}
                        answer={answer.text}
                    />
                )
            })}
        </ul>
    );
};

export default AnswerList;