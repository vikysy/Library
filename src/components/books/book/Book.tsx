import React, { FC } from 'react';
import { BooksProps } from '../../../booksAPI/Library';
import cl from './Book.module.scss';

interface BookProps {
    elem: BooksProps,
    navigate: any
}

const Book: FC<BookProps> = ({elem, navigate}) => {
    return (
        <div className={cl.container} onClick={() => navigate(`/` + elem.id)}>
            <div className={cl.imgBook}>
                <img src={elem.img}/>
            </div>
            <div className={cl.infoBook}>
                <p>{elem.categories}</p>
                <h3>{elem.title}</h3>
                <h5>{elem.author}</h5>
            </div>
        </div>
    )
};

export default Book;