import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Books from './components/books/Books';
import Layout from './components/Layout';
import Routing from './components/routing/Routing';
import Search from './components/search/Search';

function App() {
    return (
        <div className="App">
            <Layout />
            <Routing />
        </div>
    );
}

export default App;
