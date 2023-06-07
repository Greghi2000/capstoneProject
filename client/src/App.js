import './App.css';
import { useState, useEffect } from 'react';
import Player from './components/Player';
import PlayerNew from './components/PlayerNew';


function App() {

  const [cards, setCards] = useState([]);
  const [players, setPlayers] = useState([]);
  const [chosenPlayer, setChosenPlayer] = useState([]);

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
    useEffect(() => {
      fetch('http://localhost:8080/api/players/12')
      .then(res => res.json())
      .then(player => setChosenPlayer(player))
    },[])
    console.log(chosenPlayer)
  
  
  
  return (
      <>
        <PlayerNew />
        {cards.length}
        {players.length}
        {chosenPlayer.deck && chosenPlayer.deck.map((card) => (
          <div key={card.id}>
            <p>Name of Card: {card.name} || Power: {card.power}</p>
          </div>
        ))}
      </>
    );
}

export default App;