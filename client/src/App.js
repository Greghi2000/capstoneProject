import './App.css';
import Board from './components/Board';
import PlayerCardSelection from './components/PlayerCardSelection';
import StartGame from './components/StartGame';
import React, { useState } from "react";


function App() {
  const [activePlayer, setActivePlayer] = useState(null);
  return (
      <>
        <StartGame setActivePlayer={setActivePlayer}/>
        <PlayerCardSelection activePlayer={activePlayer} setActivePlayer ={setActivePlayer}/>
        <Board/>
      </>
    );
}

export default App;