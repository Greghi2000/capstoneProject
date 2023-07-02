import React from 'react';
import CardDisplay from './CardDisplay';

const Card = ({ card }) => {
  return (
    <div className="Card">
      <p>{card.name}</p>
      <p>Power: {card.power}</p>
      <CardDisplay card={card} />
    </div>
  );
};

export default Card;
