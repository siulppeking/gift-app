import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories(categories => [newCategory, ...categories]);
    }

    return (
        <React.Fragment>
            <h1>-- init Gif App</h1>

            <AddCategory onNewCategory={onAddCategory} />
            {
                categories.map((category) => {
                    return (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                })
            }
        </React.Fragment>
    )
}