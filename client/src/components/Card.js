import React from 'react';
import CardDisplay from './CardDisplay';

const Card = ({ card }) => {
  return (
    <div className="Card">
      <h2>{card.name}</h2>
      <p>Power: {card.power}</p>
      <CardDisplay card={card} />
    </div>
  );
};

export default Card;
