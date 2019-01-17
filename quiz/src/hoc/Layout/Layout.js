import React, {Component} from 'react'
import './Layout.css'
import Navigation from "../../containers/Navigation/Navigation";

class Layout extends Component{


    render(){
        return(
            <div className={'Layout'}>

                <Navigation />

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;