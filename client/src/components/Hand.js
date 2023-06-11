import axios from 'axios';
import React, { useState } from 'react';
const Hand = ({setSubmitted, activePlayerHand, setChosenPlayer, setActivePlayerId}) => {
    //this component show the selected hand from their deck of the player

    const handleHandSubmit = async (e) => {
        e.preventDefault();
    
        //confirms the hand of current player and allows for player to be toggled to player2
            fetch('http://localhost:8080/api/gamestate/togglePlayer')
            .then(res => res.json())
            .then(player => {
                setChosenPlayer(player);
                setActivePlayerId(player.id);
                console.log(player.name)
            })
            if(setSubmitted(false)) {
                setSubmitted(true)
            } else if (setSubmitted(true)) {
                setSubmitted(false)
            }
    };
      
    return ( 
        <>
        <p>Where the hand is</p>
        {activePlayerHand.map((card)=> (
          <div>
              Name of Card: {card.name} || Power: {card.power}
          </div>
        ))}
        <form onSubmit={handleHandSubmit}>
        <input type="submit" value="Confirm Hand"/>
        </form>
        </>
    );
}
 
export default Hand;