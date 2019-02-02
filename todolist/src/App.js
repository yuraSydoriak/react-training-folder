import React, {Component} from 'react';
import Layout from "./hoc/Layout";
import Todo from "./containers/Todo";


class App extends Component {
    render() {
        return (
            <Layout>
                <Todo />
            </Layout>
        );
    }
}

export default App;