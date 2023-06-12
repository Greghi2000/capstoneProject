import React, { useState } from "react";
import axios from 'axios';
const PlayerCardSelection = ({activePlayer, setActivePlayer}) => {
    const [activePlayerSelectedHand, setActivePlayerSelectedHand] = useState([])
    const [activePlayerSelectedCard, setActivePlayerSelectedCard] = useState(null)


    //choosing hand from deck

    const handleClick = (card, name, power) => {
        console.log(`Clicked on card - Name: ${name} | Power: ${power}`);
        //!check needed to stop a card being selected twice!
        if (activePlayerSelectedHand.length < 10) {
            setActivePlayerSelectedHand((prevHand) => [...prevHand, card]);
        }
      };

      const handleHandSubmit = async (e) => {
        if(activePlayer.hand.length >= 1) {
            e.preventDefault();
            console.log("Youve already submitted your hand")
        } else {
        setActivePlayerSelectedHand([])
        e.preventDefault();
        try {
          const response = await axios.post(
            'http://localhost:8080/api/players/hand',
            activePlayerSelectedHand
          );
          if(response.status === 200){
            try {
                const response = await axios.get('http://localhost:8080/api/gamestate/togglePlayer');
                // Handle the response if needed
                console.log(response.data);
                setActivePlayer(response.data);
              } catch (error) {
                console.error(error);
              }
        }
        } catch (error) {
          console.error(error);
        }
      }};

      //choosing card from hand 

      const handleChosenCardClick = (card, name, power) => {
        console.log(`Clicked on card - Name: ${name} | Power: ${power}`);
        setActivePlayerSelectedCard(card);
      }

      const handleChosenCardSubmission = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(
            'http://localhost:8080/api/gamestate/playCard',
            activePlayerSelectedCard
          );
          if(response.status === 200){
            try {
                const response = await axios.get('http://localhost:8080/api/gamestate/togglePlayer');
                // Handle the response if needed
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
      
    return (
      <>
      {activePlayer &&
        (activePlayer.hand.length >= 1 ? (
          activePlayer.hand.map((card) => (
            <div>
              <p onClick={() => handleChosenCardClick(card, card.name, card.power)}>
                Name of Card: {card.name} || Power: {card.power}
              </p>
            </div>
          ))
        ) : (
          <>
            {activePlayer.deck.map((card) => (
              <div key={card.id}>
                <p onClick={() => handleClick(card, card.name, card.power)}>
                  Name of Card: {card.name} || Power: {card.power}
                </p>
              </div>
            ))}
            <form onSubmit={handleHandSubmit}>
              <input type="submit" value="Submit" />
            </form>
          </>
        ))}
      {activePlayerSelectedCard && (
        <form onSubmit={handleChosenCardSubmission}>
          <input type="submit" value="Play Chosen Card" />
        </form>
        
      )}
    </>
    );
}
 
export default PlayerCardSelection;