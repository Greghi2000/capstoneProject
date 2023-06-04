import './App.css';
import { useState, useEffect } from 'react';
import Player from './components/Player';
import PlayerNew from './components/PlayerNew';


function App() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
      fetch('http://localhost:8080/cards')
      .then(res => res.json())
      .then(cards => setCards(cards))
    },[])
  
  
  
  return (
    <>
    <PlayerNew/>
    {cards.length}
    </>
  )
}

export default App;