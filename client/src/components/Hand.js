import React from 'react';
import { useState, useEffect } from 'react';

const Hand = ({ chosenPlayer }) => {
    const [hand, setHand] = useState([]);
    let handList = []
    const handleClick = (card, name, power) => {
        console.log(`Clicked on card - Name: ${name} | Power: ${power}`)
        if(handList.length < 10){
            handList.push(card)
        }
        console.log(`Current array list${handList}`)
    };

  return (
    <>
      {chosenPlayer.deck &&
        chosenPlayer.deck.map((card) => (
          <div key={card.id}>
            <p onClick={() => handleClick(card, card.name, card.power)}>
              Name of Card: {card.name} || Power: {card.power}
            </p>
          </div>
        ))}
    </>
  );
};

export default Hand;