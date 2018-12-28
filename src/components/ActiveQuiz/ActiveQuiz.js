import React from 'react';
import './ActiveQuiz.css';
import AnswerList from "./AnswerList/AnswerList";

const ActiveQuiz = (props) => {
    return(
        <div className={'ActiveQuiz'}>
            <span className={'ActiveQuizQuestion'}>
                <p><strong>1.</strong> {props.question.text}</p>
                <p>{props.currentQuestion} / {props.questionsLength} </p>
            </span>

            <AnswerList answers = {props.question.answers}/>
        </div>
    );
};

export default ActiveQuiz;