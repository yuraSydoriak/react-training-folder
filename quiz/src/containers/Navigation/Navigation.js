import React, {Component} from 'react';
import './Navigation.css';
import OpenCloseNavButton from "../../components/LeftSideNavigation/OpenCloseNavButton/OpenCloseNavButton";
import NavigationItems from '../../components/LeftSideNavigation/NavigationItems/NavigationItems';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

class Navigation extends Component {

    state = {
        menu: false,
        links: [
            {label: 'Home', to: '/', exact: true},
            {label: 'Authorization', to: '/auth', exact: false},
            {label: 'Quiz List', to: '/quiz-list', exact: false},
            {label: 'Create Quiz', to: '/create-quiz', exact: false}
        ]
    };

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    };

    closeBackdropHandler = () => {
        this.setState({
            menu: false
        })
    };

    clickLinkHandler = () => {
        this.closeBackdropHandler();
    }

    render() {
        const cls = ['Navigation'];

        if (!this.state.menu) {
            cls.push('close')
        }

        return (
            <React.Fragment>
                <OpenCloseNavButton onClick={this.toggleMenuHandler} isOpen={this.state.menu}/>
                <nav className={cls.join(' ')}>
                    <NavigationItems
                        links={this.state.links}
                        onLinkClick={this.clickLinkHandler}
                    />
                </nav>
                {this.state.menu ? <Backdrop onClick={this.closeBackdropHandler}/> : null}
            </React.Fragment>
        );
    }
}

export default Navigation;