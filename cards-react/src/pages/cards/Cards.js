
import './Cards.css';

import React, { useState } from 'react';

import api from '../../core/services/api.js';

import SingleCard from '../../shared/single-card/SingleCard.js';

function Cards() {

  const [cards, setCards] = useState([]);
  const [path, setPath] = useState('');
  const [back, setBack] = useState('');

  const [initialized, setInitialized] = useState(false);

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
    if (initialized === true) return;
    setInitialized(true);

    api.get('cards.json')
    .then(response => {
      const structure = response.data;
      processCards(structure);
    })
    .catch(error => {
      console.log(error);
    });
  };
  initialize();

  return (
    <React.Fragment>
      { cards.map((type, indexType) => (<div key={ `type-${ indexType }` }>
        { type.map((card, indexCard) =>
          <SingleCard key={ `card-${ indexCard }` } path={ path } front={ card } back={ back }  />
        ) }
      </div>) ) }
    </React.Fragment>
  );
}

export default Cards;
