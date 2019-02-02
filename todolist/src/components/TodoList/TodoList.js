import React from 'react';
import './TodoList.css';
import TodoListItem from '../TodoListItem';

const TodoList = props => {
    return (
        <div className='TodoListWrapper'>
            <ul>
                {props.todoItems.map( todoItem => {
                    return (
                        <li key={todoItem.id}>
                            <TodoListItem
                                label={todoItem.text}
                                id={todoItem.id}
                                priority={todoItem.priority}
                                done={todoItem.done}
                                onDeleted={() => props.onDeleted(todoItem.id)}
                                onPriorityChange={() => props.onPriorityChange(todoItem.id)}
                                onLabelClick={() => {props.onLabelClick(todoItem.id)}}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default TodoList;