import './App.css';
import Board from './components/Board';
import PlayerCardSelection from './components/PlayerCardSelection';
import StartGame from './components/StartGame'
import React, { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState(null);
  const [playersSubmitted, setPlayersSubmitted] = useState(false); // New state variable

  const handlePlayersSubmitted = () => {
    setPlayersSubmitted(true);
  };

  return (
    <>
      {!playersSubmitted && (
        <StartGame setActivePlayer={setActivePlayer} onPlayersSubmitted={handlePlayersSubmitted} />
      )}
      <PlayerCardSelection activePlayer={activePlayer} setActivePlayer={setActivePlayer} />
      <Board activePlayer={activePlayer} />
    </>
  );
}

export default App;
