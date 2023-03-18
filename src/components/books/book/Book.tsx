import React, { FC } from 'react';
import { BooksProps } from '../../../booksAPI/Library';
import cl from './Book.module.css';

interface BookProps {
    elem: BooksProps
}

const Book: FC<BookProps> = ({elem}) => {
    return (
        <div className={cl.container}>
            <a href='#'>
                <div className={cl.imgBook}>
                    <img src={elem.img}/>
                </div>
                <div className={cl.infoBook}>
                    <p>{elem.categories}</p>
                    <h3>{elem.title}</h3>
                    <h5>{elem.author}</h5>
                </div>
            </a>
        </div>
    )
};

export default Book;