import React from 'react';
import CardDisplay from './CardDisplay';

const Card = ({ card }) => {
  return (
    <div className="Card">
      <CardDisplay card={card} />
    </div>
  );
};

export default Card;
