import React from 'react';
import './FinishTest.css';
import Button from "../UI/Button/Button";


const FinishTest = (props) => {
    return (
        <div className={'FinishTest'}>
            <ul>
                {props.quiz.map((quizItem, index) => {

                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'wrongAnswer' ? 'fa-times ' : 'fa-check ',
                    ];

                    return (
                        <li key={index}>
                            <p><strong> {index + 1}. </strong> &nbsp; {quizItem.text}</p>
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}
            </ul>

            <Button onClick={props.onTrymore} type='primary'>Retry</Button>
        </div>
    )
};

export default FinishTest;