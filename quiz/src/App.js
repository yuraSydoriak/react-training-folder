import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import Home from './containers/Home/Home';
import Auth from './containers/Auth/Auth';
import QuizList from './containers/QuizList/QuizList';
import QuizCreator from './containers/QuizCreator/QuizCreator';

class App extends Component {
    render() {
        return (
            <Layout>
                <Route path="/" exact component={Home} />
                <Route path='/auth' component={Auth} />
                <Route path='/quiz-list' component={QuizList} />
                <Route path='/create-quiz' component={QuizCreator} />
                <Route path='/quiz/:id' component={Quiz} />
            </Layout>
        );
    }
}

export default App;
