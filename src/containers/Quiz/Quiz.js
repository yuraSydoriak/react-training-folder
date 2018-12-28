import React, {Component} from 'react'
import './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";


class Quiz extends Component{

    state = {
        currentQuestion: 0,
        quiz: [
            {
                id : 1,
                text: '@ First question',
                correctAnswer: 1,
                answers: [
                    { id : 1, text: 'Answer 1'},
                    { id : 2, text: 'Answer 2'},
                    { id : 3, text: 'Answer 3'},
                    { id : 4, text: 'Answer 4'}
                ]
            },
            {
                id : 2,
                text: '@@ Second question',
                correctAnswer: 2,
                answers: [
                    { id : 1, text: 'Answer 1'},
                    { id : 2, text: 'Answer 2'},
                    { id : 3, text: 'Answer 3'},
                    { id : 4, text: 'Answer 4'}
                ]
            },
            {
                id : 3,
                text: '@@@ Third question',
                correctAnswer: 3,
                answers: [
                    { id : 1, text: 'Answer 1'},
                    { id : 2, text: 'Answer 2'},
                    { id : 3, text: 'Answer 3'},
                    { id : 4, text: 'Answer 4'}
                ]
            }
        ]
    };

    render(){
        return(
            <div className={'Quiz'}>
                <div className={'QuizWrapper'}>
                    <h1>Try to answer the questions:</h1>
                    <ActiveQuiz
                        question = {this.state.quiz[this.state.currentQuestion]}
                        questionsLength = {this.state.quiz.length}
                        currentQuestion = {this.state.currentQuestion + 1}
                    />
                </div>
            </div>
        )
    };
}

export default Quiz;