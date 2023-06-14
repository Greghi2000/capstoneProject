import './App.css';
import Board from './components/Board';
import PlayerCardSelection from './components/PlayerCardSelection';
import StartGame from './components/StartGame';
import Header from './components/Header';
import React, { useState } from "react";
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  const [activePlayer, setActivePlayer] = useState(null);
  const [playersSubmitted, setPlayersSubmitted] = useState(false); // New state variable
  const [newPlayers, setNewPlayers] = useState([]);

  const handlePlayersSubmitted = () => {
    setPlayersSubmitted(true);
  };

  return (
    <>
      <Header startGameComponent={ !playersSubmitted && (<StartGame newPlayers={newPlayers} setNewPlayers={setNewPlayers} setActivePlayer={setActivePlayer} onPlayersSubmitted={handlePlayersSubmitted} />)} />
      <Board newPlayers={newPlayers} activePlayer={activePlayer} />
      <PlayerCardSelection activePlayer={activePlayer} setActivePlayer={setActivePlayer} />
      <BackgroundMusic/>
    </>
  );
}

export default App;