import React, { useState } from 'react';
import axios from 'axios';


//this component currently allows the chosen player to choose their hand from their deck
const Hand = ({ chosenPlayer }) => {
  const [hand, setHand] = useState([]);

  const handleClick = (card, name, power) => {
    console.log(`Clicked on card - Name: ${name} | Power: ${power}`);
    //!check needed to stop a card being selected twice!
    if (hand.length < 10) {
      setHand((prevHand) => [...prevHand, card]);
    }
    console.log(`Current array list: ${hand}`);
  };

  const handleHandSubmit = async (e) => {
    e.preventDefault();

    //saves hand in the backend so now it is both in state in react, and stored in GameState in java
    try {
      const response = await axios.post(
        'http://localhost:8080/api/players/hand',
        hand
      );
      console.log("Hand posted: " + response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {chosenPlayer && chosenPlayer.deck && chosenPlayer.deck.length > 0 ? (
        chosenPlayer.deck.map((card) => (
          <div>
            <p onClick={() => handleClick(card, card.name, card.power)}>
              Name of Card: {card.name} || Power: {card.power}
            </p>
          </div>
        ))
      ) : (
        <p>No cards available</p>
      )}
      <form onSubmit={handleHandSubmit}>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Hand;
