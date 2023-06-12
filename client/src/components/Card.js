import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="Card">
      <h2>{card.name}</h2>
      <p>Power: {card.power}</p>
    </div>
  );
};

export default Card;
