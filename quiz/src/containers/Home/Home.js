import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <div className='description'>
                    Now you on the Home page if this application, If you want to pass a little exam go to
                    left side menu and click on 'Quiz'
                </div>
            </div>
        );
    }
}

export default Home;