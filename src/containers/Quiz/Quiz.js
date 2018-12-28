import React, {Component} from 'react';
import './Quiz.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishTest from "../../components/FinishTest/FinishTest";


class Quiz extends Component{

    state = {
        currentQuestion: 0,
        quizFinished: false,
        results: {},
        answerState: null,
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

        const question = this.state.quiz[this.state.currentQuestion];
        const correctAnswer = this.state.quiz[this.state.currentQuestion].correctAnswer;
        const results = this.state.results;

        if(this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];

            if(this.state.answerState[key] === 'correctAnswer'){
                return
            }
        }

        if(answerId === correctAnswer){
            if (results[question.id] === answerId){
                if (!results[question.id]){
                    results[question.id] = 'correctAnswer'
                }
            }

            this.setState({
                answerState: {[answerId]: 'correctAnswer'}
            });

            const timeOut = window.setTimeout( () => {
                if( this.ifQuizFinished() ){
                    this.setState({
                        quizFinished: true
                    })
                } else {
                    this.setState({
                        currentQuestion: this.state.currentQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeOut)
            }, 1000)
        } else {
            results[question.id] = 'wrongAnswer';
            this.setState({
                answerState: {[answerId]: 'wrongAnswer'},
                results : results
            })
        }
    };

    ifQuizFinished = () => {
        return this.state.currentQuestion + 1 === this.state.quiz.length;
    };

    tryOneMoreTimeHandler = () => {
        this.setState({
            currentQuestion: 0,
            quizFinished: false,
            answerState: null,
            results: {}
        })
    };

    render(){
        return(
            <div className={'Quiz'}>
                <div className={'QuizWrapper'}>
                    <h1>{this.state.quizFinished ? 'The test is finished!' : 'Can you answer the questions:'}</h1>
                    {
                        this.state.quizFinished
                        ?
                        <FinishTest
                            results = {this.state.results}
                            quiz = {this.state.quiz}
                            onTrymore = {this.tryOneMoreTimeHandler}
                        />
                        :
                        <ActiveQuiz
                            question = {this.state.quiz[this.state.currentQuestion]}
                            questionsLength = {this.state.quiz.length}
                            questionNumber = {this.state.currentQuestion + 1}
                            onAnswerClick = {this.onAnswerClickHandler}
                            answerState = {this.state.answerState}
                        />
                    }
                </div>
            </div>
        )
    };
}

export default Quiz;