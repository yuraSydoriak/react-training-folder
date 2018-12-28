import React from 'react';
import './ActiveQuiz.css';
import AnswerList from "./AnswerList/AnswerList";

const ActiveQuiz = (props) => {
    return(
        <div className={'ActiveQuiz'}>
            <span className={'ActiveQuizQuestion'}>
                <p><strong>{props.questionNumber}.</strong> {props.question.text}</p>
                <p>{props.questionNumber} / {props.questionsLength} </p>
            </span>

            <AnswerList
                answers = {props.question.answers}
                answerState = {props.answerState}
                onAnswerClick = {props.onAnswerClick}
            />
        </div>
    );
};

export default ActiveQuiz;