import React from 'react';
import './SearchPanel.css';
import Input from "../UI/Input";

const SearchPanel = () => {
    return (
        <div className="SearchPanel">
            <Input
                className="default"
                type="text"
                placeholder="Type here for search..."
            />
        </div>
    );
};

export default SearchPanel;
