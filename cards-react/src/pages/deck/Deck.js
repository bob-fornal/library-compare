
import './Deck.css';

import React, { useState, useEffect } from 'react';

import api from '../../core/services/api.js';

import SingleCard from '../../shared/single-card/SingleCard.js';

function Deck() {

  const [cards, setCards] = useState([]);
  const [path, setPath] = useState('');
  const [back, setBack] = useState('');

  const processCards = (structure) => {
    let cards = [];
  
    const path = '/assets/images/';
    const back = structure.back + structure.format;
  
    structure.type.forEach(cardType => {
      let type = [];
      structure.descriptor.forEach(desc => {
        type.push(`${ cardType }-${ desc }${ structure.format }`);
      });
      cards.push(type);
    });
  
    setPath(path);
    setBack(back);
    setCards(cards);
  };

  const initialize = () => {
    api.get('cards.json').then(response => {
      const structure = response.data;
      processCards(structure);
    }).catch(error => {
      console.log(error);
    });
  };

  useEffect(initialize, []);

  return (
    <div>DECK ...</div>
  );
}

export default Deck;
