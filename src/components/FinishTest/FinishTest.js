import React from 'react';
import './FinishTest.css';

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

            <button onClick={props.onTrymore}>Retry</button>
        </div>
    )
};

export default FinishTest;