import React from 'react';
import './App.css';
import Books from './components/books/Books';
import Search from './components/search/Search';

function App() {
    return (
        <div className="App">
            <Search />
            <Books />
        </div>
    );
}

export default App;
