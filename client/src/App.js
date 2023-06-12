import './App.css';
import PlayerCardSelection from './components/PlayerCardSelection';
import StartGame from './components/StartGame';
import React, { useState } from "react";


function App() {
  const [activePlayer, setActivePlayer] = useState(null);
  return (
      <>
        <StartGame setActivePlayer={setActivePlayer}/>
        <PlayerCardSelection activePlayer={activePlayer} setActivePlayer ={setActivePlayer}/>
      </>
    );
}

export default App;