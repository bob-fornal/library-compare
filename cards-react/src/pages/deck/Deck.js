
import './Deck.css';

import React, { useState, useEffect } from 'react';

import api from '@core/services/api.js';
import shuffler from '@core/services/shuffler.service.js';

import SingleCard from '@shared/single-card/SingleCard.js';

function Deck() {

  const [path, setPath] = useState('');
  const [back, setBack] = useState('');

  const [topCard, setTopCard] = useState({
    index: 0,
    cards: [],
    front: '',
    show: false
  });

  const changeTopCard = (index = 0, cards = undefined) => {
    let tempCard = Object.assign({}, topCard);
    if (cards !== undefined) {
      tempCard.cards = cards;
    }
    tempCard.index = index;
    tempCard.front = tempCard.cards[index];
    tempCard.show = false;

    setTopCard(tempCard);
  };

  const processCards = (structure) => {
    let tempCards = [];
  
    const path = '/assets/images/';
    const back = structure.back + structure.format;
  
    structure.type.forEach(cardType => {
      structure.descriptor.forEach(desc => {
        tempCards.push(`${ cardType }-${ desc }${ structure.format }`);
      });
    });

    const shuffled = shuffler.shuffle(tempCards);

    setPath(path);
    setBack(back);

    changeTopCard(0, shuffled);
  };

  const onVisibleClickFn = () => {
    const index = (topCard.index === (topCard.cards.length - 1)) ? 0 : topCard.index + 1;
    changeTopCard(index);
  };

  const initialize = () => {
    api.get('cards.json').then(response => {
      const structure = response.data;
      processCards(structure);
    }).catch(error => {
      console.log(error);
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(initialize, []);

  return (
    <div className="deck-wrapper">
      <span className="stacked-deck">
        <SingleCard back={ back } front={ back } path={ path } addClass="deck-card" />
        <SingleCard back={ back } front={ topCard.front } path={ path } show={ topCard.show }
          onVisibleClick={ onVisibleClickFn.bind(this) } />
      </span>  
    </div>
  );
}

export default Deck;
