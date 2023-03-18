import React, { FC, useEffect, useState } from 'react';
import selectCategories from '../../store/selectCategories';
import cl from './Search.module.scss';
import { observer } from 'mobx-react-lite';

interface SearchProps {

}

const Search: FC<SearchProps> = observer( () => {
    const [valueInput, setValueInput] = useState('');
    const [valueCategories, setValueCategories] = useState('all');
    const [valueSotringBy, setValueSortingBy] = useState('relevance');

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter") {
            selectCategories.changeValueInput(valueInput);
        }
    };

    useEffect(() => {
        selectCategories.changeValueCategories(valueCategories);
        selectCategories.changeValueSotringBy(valueSotringBy);
    }, [valueCategories, valueSotringBy])

    return (
        <div className={cl.wrap}>
            <div className={cl.containerSearch}>
                <h1>Search for books</h1>
                <div className={cl.search}>
                    <input 
                        type='text' 
                        placeholder='Search'
                        onChange={(event) => setValueInput(event.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button onClick={() => selectCategories.changeValueInput(valueInput)}></button>
                </div>
                <div className={cl.sorting}>
                    <label htmlFor='categories'>Categories</label>
                    <select 
                        value={valueCategories} 
                        name='categories' 
                        id='categories' 
                        onChange={(event) => setValueCategories(event.target.value)}
                    >
                        <option value="all">all</option>
                        <option value="art">art</option>
                        <option value="biography">biography</option>
                        <option value="computers">computers</option>
                        <option value="history">history</option>
                        <option value="medical">medical</option>
                        <option value="poetry">poetry</option>
                    </select>
                    <label htmlFor='sortingBy'>Sorting by</label>
                    <select 
                        value={valueSotringBy}
                        name='sortingBy' 
                        id='sortingBy' 
                        onChange={(event) => setValueSortingBy(event.target.value)}
                    >
                        <option value="relevance">relevance</option>
                        <option value="newest">newest</option>
                    </select>
                </div>
            </div>
        </div>
    )
})

export default Search;