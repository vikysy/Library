import React from 'react';
import { Outlet } from 'react-router-dom';
import Books from './books/Books';
import Search from './search/Search';

const Layout = () => {
    return (
        <>
            <Search />
            <Outlet />
        </>
    )
};

export default Layout;