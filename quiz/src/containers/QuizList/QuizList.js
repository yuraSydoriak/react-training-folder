import React, {Component} from 'react';
import './QuizList.css';
import {NavLink} from 'react-router-dom';

class QuizList extends Component {

    renderQuizez = () => {
        return [1,2,3,4].map((quiz, index)=> {
            return(
                <li key={index}>
                    <NavLink
                        to={'/quiz/' + quiz}
                    >
                        Test {quiz}
                    </NavLink>
                </li>
            );
        })
    }

    render(){
        return(
            <div className='QuizList'>
                <div>
                    <h1>Quiz List:</h1>

                    <ul>
                        {this.renderQuizez()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default QuizList;