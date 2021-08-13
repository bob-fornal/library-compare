
import './App.css';

import React, { useState } from 'react';

import Header from './shared/header/Header.js';

import Cards from './pages/cards/Cards.js';
import Deck from './pages/deck/Deck.js';

function App() {
  let [showPage, setPage] = useState('cards');

  const handlePageChange = (page) => {
    setPage(page);
  };

  const switchPage = () => {
    switch (true) {
      case (showPage === 'cards'):
        return <Cards />;
      case (showPage === 'deck'):
        return <Deck />;
      default:
        return null;
    }
  };
  
  return (
    <div className="App">
      <Header onPageChange={ handlePageChange } />
      <div className="content--wrapper">
        { switchPage() }
      </div>
    </div>
  );
}

export default App;
