import './App.css';
import { useState, useEffect } from 'react';
import Player from './components/Player';
import PlayerNew from './components/PlayerNew';


function App() {

  const [cards, setCards] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
      fetch('http://localhost:8080/cards')
      .then(res => res.json())
      .then(cards => setCards(cards))
    },[])

    useEffect(() => {
      fetch('http://localhost:8080/api/players')
      .then(res => res.json())
      .then(players => setPlayers(players))
    },[])
  
  
  
  return (
    <>
    <PlayerNew/>
    {cards.length}
    {players.length}
    </>
  )
}

export default App;