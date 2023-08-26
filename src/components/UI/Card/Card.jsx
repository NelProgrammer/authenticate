import React from 'react';

import css_Card from './Card.module.css';

const Card = (props) => {
  return (
    <div className={`${css_Card.card} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
