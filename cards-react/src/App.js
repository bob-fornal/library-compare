
import './App.css';

import React, { useState } from 'react';

import Header from './shared/header/Header.js';
import Cards from './pages/cards/Cards.js';

function App() {
  let [showPage, setPage] = useState('cards');

  const handlePageChange = (page) => {
    setPage(page);
  };
  
  return (
    <div className="App">
      <Header onPageChange={ handlePageChange } />
      <div className="content">
        { showPage === 'cards' ? <Cards /> : null }
        { showPage === 'deck' ? 'deck' : null }
      </div>
    </div>
  );
}

export default App;
