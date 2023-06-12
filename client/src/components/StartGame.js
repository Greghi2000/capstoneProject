import React, { useState } from "react";
import axios from 'axios';
const StartGame = ({setActivePlayer}) => {
    
    const [newPlayers, setNewPlayers] = useState([]);
    const [inputtedPlayer, setInputtedPlayer] = useState(null);

    const handleNameChange = (e) => {
        setInputtedPlayer(e.target.value);
      };

    const handlePlayersList = (e) => {
        e.preventDefault();
        setInputtedPlayer("")
        setNewPlayers((prevPlayers) => [...prevPlayers, inputtedPlayer]);
      };

    const handleSubmitPlayers = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/game/initialise', newPlayers );
            console.log(response.status);
            console.log("These are the players from game/initialise " + newPlayers);
            if(response.status === 200){
                try {
                    const response = await axios.get('http://localhost:8080/api/gamestate/getActivePlayer');
                    // Handle the response if needed
                    console.log(response.data);
                    setActivePlayer(response.data);
              
                    // Clear the form after successful submission
                  } catch (error) {
                    // Handle the error if needed
                    console.error(error);
                  }
            }
          } catch (error) {
            console.error(error);
          }
        }

    return (
        <div className="UserNewForm">
          <form onSubmit={handlePlayersList}>
            <label htmlFor="newPlayerName">Name:</label>
            <input
              type="text"
              id="newPlayerName"
              name="newPlayerName"
              onChange={handleNameChange}
              value={inputtedPlayer}
            />
            <button type="submit">Add Player</button>
          </form>
    
          <form onSubmit={handleSubmitPlayers}>
            <button type="submit">Submit Players</button>
          </form>
          <ul>
            {newPlayers.map((newPlayers, index) => (
              <li>{newPlayers}</li>
            ))}
          </ul>
        </div>
      );
}
 
export default StartGame;