import React, {Component} from 'react'
import './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";


class Quiz extends Component{

    state = {
        currentQuestion: 0,
        quiz: [
            {
                id : 1,
                text: 'First question (correct answer 4)',
                correctAnswer: 4,
                answers: [
                    { id : 1, text: 'Answer 1'},
                    { id : 2, text: 'Answer 2'},
                    { id : 3, text: 'Answer 3'},
                    { id : 4, text: 'Answer 4'}
                ]
            },
            {
                id : 2,
                text: 'Second question (correct answer 2)',
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
                text: 'Third question (correct answer 3)',
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

    onAnswerClickHandler = (answerId) => {
        const correctAnswer = this.state.quiz[this.state.currentQuestion].correctAnswer;

        if (answerId === correctAnswer){
            this.setState({
                currentQuestion: this.state.currentQuestion + 1
            })

        } else {
            console.log(false);
        }
    }

    render(){
        return(
            <div className={'Quiz'}>
                <div className={'QuizWrapper'}>
                    <h1>Try to answer the questions:</h1>
                    <ActiveQuiz
                        question = {this.state.quiz[this.state.currentQuestion]}
                        questionsLength = {this.state.quiz.length}
                        questionNumber = {this.state.currentQuestion + 1}
                        onAnswerClick = {this.onAnswerClickHandler}
                    />
                </div>
            </div>
        )
    };
}

export default Quiz;