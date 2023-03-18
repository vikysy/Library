import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { library } from '../../booksAPI/Library';
import arrow from './arrow.jpg';
import cl from './PageBook.module.scss';

const PageBook = () => {
    const params = useParams();
    const browserHistory = useNavigate();

    return (
        <div className={cl.container}>
            <div className={cl.backArrow} onClick={() => browserHistory(-1)}>
                <img src={arrow}/>
            </div>
            {library.map(elem => (elem.id === params.id) && (
                <div key={elem.id} className={cl.card}> 
                    <div className={cl.blockImg}>
                        <img src={elem.img}/>
                    </div>
                    <div className={cl.BlockInfo}>
                        <p>Categories:{elem.categories.charAt(0).toUpperCase() + elem.categories.slice(1)}</p>
                        <h3>{elem.title}</h3>
                        <p>{elem.author}</p>
                        <div>{elem.text}</div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default PageBook;