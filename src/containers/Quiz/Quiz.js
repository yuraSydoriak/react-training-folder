import React, {Component} from 'react'
import './Quiz.css'

class Quiz extends Component{

    state = []

    render(){
        return(
            <div className={'Quiz'}>
                <div className={'QuizWrapper'}>
                    <h1>Try to answer the questions:</h1>

                </div>
            </div>
        )
    };
}

export default Quiz;