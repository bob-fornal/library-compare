
import './SingleCard.css';

import React, { useState } from 'react';

function SingleCard(props) {

  const getBack = () => props.path + props.back;
  const getFront = () => props.path + props.front;

  return (
    <div className="card">
      <div className="content">
        <img src={ getFront() } className="front" alt="" />
        <img src={ getBack() } className="back" alt="" />
      </div>
    </div>
  );
}

export default SingleCard;
