import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { library } from '../../booksAPI/Library';
import selectCategories from '../../store/selectCategories';
import Book from './book/Book';
import cl from './Books.module.css';

const Books = observer(() => {
    const [newLibrary, setNewLibrary] = useState(library);
    const [libraryLength, newLibraryLength] = useState(newLibrary.length);

    useEffect(() => {
        setNewLibrary(sortingLibrary(selectCategories.valueInput, selectCategories.valueCategories, selectCategories.valueSotringBy))
        newLibraryLength(newLibrary.length);
    }, [selectCategories.valueInput, selectCategories.valueCategories, selectCategories.valueSotringBy, newLibrary.length])

    function sortingLibrary(valueInput:string, valueCategories:string, valueSotringBy:string) {
        const arrAll = library.filter(elem => (elem.sorting[0] === valueSotringBy || elem.sorting[1] === valueSotringBy)
            && (elem.title.toLowerCase().includes(valueInput.toLowerCase().trim()) 
                || elem.author.toLowerCase().includes(valueInput.toLowerCase().trim()))
        );
        const arrFullSorting = library.filter(elem => (elem.categories === valueCategories) 
            && (elem.sorting[0] === valueSotringBy || elem.sorting[1] === valueSotringBy)
            && (elem.title.toLowerCase().includes(valueInput.toLowerCase().trim()) 
                || elem.author.toLowerCase().includes(valueInput.toLowerCase().trim()))
        );
        let arr = valueCategories === 'all' ? arrAll : arrFullSorting;
        console.log(arr);
        return arr;
    }

    return (
        <div className={cl.container}>
            <h2>Всего найдено <span>{libraryLength}</span> книг</h2>
            <div className={cl.blockGrid}>
                {newLibrary.map(elem => <Book key={elem.id} elem={elem}/>)}
            </div>
        </div>
    )
});

export default Books;