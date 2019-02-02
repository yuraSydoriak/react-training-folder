import React, {Component} from 'react';
import './Todo.css';
import Header from '../../components/Header';
import SearchPanel from '../../components/SearchPanel';
import SortPanel from '../../components/SortPanel';
import TodoList from '../../components/TodoList';
import AddListItem from '../../components/AddListItem';


class Todo extends Component{

    state = {
        todoData: [
            {id: 1, done: false, priority: false, text: 'Drink coffee'},
            {id: 2, done: false, priority: false, text: 'Watch movie'},
            {id: 3, done: false, priority: false, text: 'Drink tea'}
        ],
        label: ''
    };

    DeleteTodoItemHandler = (id) => {
        const TodoItemIndex = this.state.todoData.findIndex( (el) => el.id === id);
        const TodoData = [...this.state.todoData];
        TodoData.splice(TodoItemIndex, 1);
        this.setState({
            todoData: TodoData
        });
    };

    onPriorityChangeHandler = (id) => {
        const TodoItemIndex = this.state.todoData.findIndex( (el) => el.id === id);
        const TodoData = [...this.state.todoData];
        TodoData[TodoItemIndex].priority = !TodoData[TodoItemIndex].priority;
        this.setState({
            todoData: TodoData
        });
    };

    onLabelClickHandler = (id) => {
        const TodoItemIndex = this.state.todoData.findIndex( (el) => el.id === id);
        const TodoData = [...this.state.todoData];
        TodoData[TodoItemIndex].done = !TodoData[TodoItemIndex].done;
        this.setState({
            todoData: TodoData
        });
    };

    addNewTodoItemHandler = () => {
        const NewItemID = this.state.todoData.length + 1;
        const NewItemText = this.state.label;
        const NewTodoItem = {id: NewItemID, done: false, priority: false, text: NewItemText};
        const TodoData = [...this.state.todoData];
        TodoData.push(NewTodoItem);
        this.setState({
            todoData: TodoData
        });
    };

    onTypeHandler = (event) => {
        const ValueFromInput = event.target.value;
        this.setState({
            label: ValueFromInput
        });
    };

    SubmitFormForAddItemHandler = (event) => {
        event.preventDefault();
        this.addNewTodoItemHandler();

        this.setState({
            label: ''
        });
    };

    render() {

        const DoneCount = this.state.todoData.filter((el) => el.done).length;
        const TodoCount = this.state.todoData.length - DoneCount;


        return(
            <div className="Todo">
                <div className="TodoWrapper">
                    <Header
                        todo={TodoCount}
                        done={DoneCount}
                    />
                    <SearchPanel />
                    <SortPanel />
                    <TodoList
                        todoItems={this.state.todoData}
                        onDeleted={this.DeleteTodoItemHandler}
                        onPriorityChange={this.onPriorityChangeHandler}
                        onLabelClick={this.onLabelClickHandler}
                    />
                    <AddListItem
                        addNewTodoItem={this.addNewTodoItemHandler}
                        onType={this.onTypeHandler}
                        SubmitFormForAddItem={this.SubmitFormForAddItemHandler}
                    />
                </div>
            </div>
        );
    };
}

export default Todo;
