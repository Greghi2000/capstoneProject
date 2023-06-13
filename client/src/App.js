import './App.css';
import Board from './components/Board';
import PlayerCardSelection from './components/PlayerCardSelection';
import StartGame from './components/StartGame'
import Header from './components/Header'
import React, { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState(null);
  const [playersSubmitted, setPlayersSubmitted] = useState(false); // New state variable

  const handlePlayersSubmitted = () => {
    setPlayersSubmitted(true);
  };

  return (
    <>
      <Header/>
      {!playersSubmitted && (
        <StartGame setActivePlayer={setActivePlayer} onPlayersSubmitted={handlePlayersSubmitted} />
      )}
      <Board activePlayer={activePlayer} />
      <PlayerCardSelection activePlayer={activePlayer} setActivePlayer={setActivePlayer} />
    </>
  );
}

export default App;
