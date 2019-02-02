import React from 'react';
import './AddListItem.css';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const AddListItem =  props => {
    return(
        <form className='AddListItem' onSubmit={props.SubmitFormForAddItem}>
            <Input className="default mediumWidth"
                   type="text"
                   placeholder="Add ToDo Item..."
                   onChange={props.onType}
                   value={props.value}
            />
            <Button
                onClick={props.SubmitFormForAddItem}
                type='button'
                label='Add'
            />
        </form>
    );
}

export default AddListItem;