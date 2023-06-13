import React, { useState } from "react";
import axios from 'axios';
import './PlayerCardSelection.css';

const PlayerCardSelection = ({ activePlayer, setActivePlayer }) => {
  const [activePlayerSelectedHand, setActivePlayerSelectedHand] = useState([]);
  const [activePlayerSelectedCard, setActivePlayerSelectedCard] = useState(null);

  // Choosing hand from deck

  const handleClick = (card, name, power) => {
    console.log(`Clicked on card - Name: ${name} | Power: ${power}`);
    const isCardSelected = activePlayerSelectedHand.some((selectedCard) => selectedCard.id === card.id);
    if (!isCardSelected && activePlayerSelectedHand.length < 10) {
      setActivePlayerSelectedHand((prevHand) => [...prevHand, card]);
    }
  };

  const handleHandSubmit = async (e) => {
    if (activePlayer.hand.length >= 1) {
      e.preventDefault();
      console.log("You've already submitted your hand");
    } else {
      setActivePlayerSelectedHand([]);
      e.preventDefault();
      try {
        const response = await axios.post(
          'http://localhost:8080/api/players/hand',
          activePlayerSelectedHand
        );
        if (response.status === 200) {
          try {
            const response = await axios.get('http://localhost:8080/api/gamestate/togglePlayer');
            console.log(response.data);
            setActivePlayer(response.data);
          } catch (error) {
            console.error(error);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  // Choosing card from hand 

  const handleChosenCardClick = (card, name, power) => {
    console.log(`Clicked on card - Name: ${name} | Power: ${power}`);
    setActivePlayerSelectedCard(card);
  };

  const handleChosenCardSubmission = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/api/gamestate/playCard',
        activePlayerSelectedCard
      );
      if (response.status === 200) {
        try {
          const response = await axios.get('http://localhost:8080/api/gamestate/togglePlayer');
          console.log(response.data);
          setActivePlayer(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePassRound = async (e) => {
    e.preventDefault();
    try {
      const passResponse = await axios.get('http://localhost:8080/api/gamestate/passRound');
      console.log(passResponse.data);
      console.log(activePlayer.name + " Has passed the round")
      const toggleResponse = await axios.get('http://localhost:8080/api/gamestate/togglePlayer');
      console.log(toggleResponse.data);
      setActivePlayer(toggleResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="PlayerCardSelection">
      {activePlayer &&
        (activePlayer.hand.length >= 1 ? (
          <>
            {activePlayer.hand.map((card) => (
              <div
                key={card.id}
                className={`card ${activePlayerSelectedCard && activePlayerSelectedCard.id === card.id ? 'active' : ''}`}
                onClick={() => handleChosenCardClick(card, card.name, card.power)}
              >
                <p>
                  Name of Card: {card.name} || Power: {card.power}
                </p>
              </div>
            ))}
            <form onSubmit={handleChosenCardSubmission}>
              <input type="submit" value="Play Chosen Card" />
            </form>
          </>
        ) : (
          <>
            {activePlayer.deck.map((card) => (
              <div
                key={card.id}
                className={`card ${activePlayerSelectedHand.some((selectedCard) => selectedCard.id === card.id) ? 'selected' : ''}`}
                onClick={() => handleClick(card, card.name, card.power)}
              >
                <p>
                  Name of Card: {card.name} || Power: {card.power}
                </p>
              </div>
            ))}
            <form onSubmit={handleHandSubmit}>
              <input type="submit" value="Submit" />
            </form>
          </>
        ))}
      <form onSubmit={handlePassRound}>
        <input type="submit" value="Pass Round" />
      </form>
    </div>
  );
};

export default PlayerCardSelection;
