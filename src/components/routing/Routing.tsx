import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Books from '../books/Books';
import PageBook from '../pageBook/PageBook';

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={< Books />} />
                <Route path='/:id' element={< PageBook />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </>
    )
};

export default Routing;