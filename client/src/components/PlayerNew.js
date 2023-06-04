import React, { useState } from 'react';
import axios from 'axios';

const Player = () => {
  const [playerName, setPlayerName] = useState('');

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleNewPlayerSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/players', { name: playerName });
      // Handle the response if needed
      console.log(response.data);

      // Clear the form after successful submission
      setPlayerName('');
    } catch (error) {
      // Handle the error if needed
      console.error(error);
    }
  };

  return (
    <div className="UserNewForm">
      <form onSubmit={handleNewPlayerSubmit}>
        <label htmlFor="newPlayerName">Name:</label>
        <input
          type="text"
          id="newPlayerName"
          name="newPlayerName"
          onChange={handleNameChange}
          value={playerName}
        />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default Player;
