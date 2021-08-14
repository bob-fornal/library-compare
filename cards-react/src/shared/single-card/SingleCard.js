
import './SingleCard.css';

import React, { useState, useEffect } from 'react';

function SingleCard(props) {

  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const getBack = () => props.path + props.back;
  const getFront = () => props.path + props.front;

  const cardClassNames = () => {
    let names = [ 'card' ];
    if (props?.disabled === true) {
      names.push('disabled');
    } else if (show === true) {
      names.push('show');
    }
    if (props.hasOwnProperty('addClass')) {
      names.push(props.addClass);
    }
    return names.join(' ');
  };

  const toggleShow = () => {
    if (props?.disabled === true) return;
    setShow(!show);
    if (show === false && props.hasOwnProperty('onVisibleClick')) {
      props.onVisibleClick();
    }
  };

  return (
    <div className={ cardClassNames() } onClick={ toggleShow }>
      <div className="content">
        <img src={ getFront() } className="front" alt="" />
        <img src={ getBack() } className="back" alt="" />
      </div>
    </div>
  );
}

export default SingleCard;
