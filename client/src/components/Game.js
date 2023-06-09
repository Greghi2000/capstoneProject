import React, { useState } from "react";
import axios from 'axios';



const Game = ({setActivePlayerId}) => {
  const [players, setPlayers] = useState([]); //list of the two players that are in the game
  const [activePlayer, setActivePlayer] = useState(""); //player who is currently playing turn/choosing hand

  const handleNameChange = (e) => {
    setActivePlayer(e.target.value);
  };

  const handlePlayersList = (e) => {
    e.preventDefault();
    setPlayers((prevPlayers) => [...prevPlayers, activePlayer]);
    setActivePlayer("");
  };

  const handleStartGame = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8080/api/game/initialise', players );
        // Handle the response if needed
        console.log(response.status);
        console.log("These are the players from game/initialise " + players);
        if(response.status === 200){
            try {
                const response = await axios.get('http://localhost:8080/api/gamestate/getActivePlayer');
                // Handle the response if needed
                console.log(response.data.id);
                setActivePlayerId(response.data.id);
          
                // Clear the form after successful submission
              } catch (error) {
                // Handle the error if needed
                console.error(error);
              }
        }

      } catch (error) {
        // Handle the error if needed
        console.error(error);
      }
    };

  return (
    <div className="UserNewForm">
      <form onSubmit={handlePlayersList}>
        <label htmlFor="newPlayerName">Name:</label>
        <input
          type="text"
          id="newPlayerName"
          name="newPlayerName"
          onChange={handleNameChange}
          value={activePlayer}
        />
        <button type="submit">Add Player</button>
      </form>

      <form onSubmit={handleStartGame}>
        <button type="submit">Start Game</button>
      </form>

      {/* Render the list of players */}
      <ul>
        {players.map((player, index) => (
          <li>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
