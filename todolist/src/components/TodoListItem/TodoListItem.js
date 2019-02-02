import React from 'react';
import './TodoListItem.css';
import Button from '../../components/UI/Button';

const TodoListItem = props => {

    let ListItemLabelClasses = ['ListItemLabel'];

    if(props.done){
        ListItemLabelClasses.push('done');
    }
    if(props.priority){
        ListItemLabelClasses.push('priority');
    }

    return(
        <div className='TodoListItem'>
            <span
                className={ListItemLabelClasses.join(' ')}
                onClick={props.onLabelClick}
            >
                {props.label}
            </span>

            <div className="buttonsWrapper">
                <Button
                    type={props.priority ? 'button small active' : 'button small' }
                    label={<i className="fas fa-exclamation"></i>}
                    onClick={props.onPriorityChange}
                />
                <Button
                    type='button small'
                    label={<i className="fas fa-trash-alt"></i>}
                    onClick={props.onDeleted}
                />
            </div>
        </div>
    );
}

export default TodoListItem;