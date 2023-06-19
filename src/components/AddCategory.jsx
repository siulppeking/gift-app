import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const inputOnChange = (e) => {
        setInputValue(e.target.value);
    }

    const formOnSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <React.Fragment>
            <form onSubmit={formOnSubmit}>
                <input type="text"
                    placeholder='Buscar gifts'
                    value={inputValue}
                    onChange={inputOnChange}
                />
            </form>
        </React.Fragment>
    )
}