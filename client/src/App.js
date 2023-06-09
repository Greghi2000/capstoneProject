import './App.css';
import { useState, useEffect } from 'react';
import Hand from './components/Hand';
import PlayerNew from './components/PlayerNew';
import Game from './components/Game';


function App() {

  const [cards, setCards] = useState([]);
  const [players, setPlayers] = useState([]);
  const [chosenPlayer, setChosenPlayer] = useState(null);
  const [activePlayerId, setActivePlayerId] = useState("");
  const [activePlayerHand, setActivePlayerHand] = useState([]);

  useEffect(() => {
      fetch('http://localhost:8080/cards')
      .then(res => res.json())
      .then(cards => setCards(cards))
    },[])
    
    //Does this run at the start: what players is it getting?
    useEffect(() => {
      fetch('http://localhost:8080/api/players')
      .then(res => res.json())
      .then(players => setPlayers(players))
    },[])

    useEffect(() => {
        fetch(`http://localhost:8080/api/player/${activePlayerId}`)
        .then(res => res.json())
        .then(player => setChosenPlayer(player))
      },[activePlayerId])

console.log("Chosen Player is right now: " + chosenPlayer.name)
      


    useEffect(() => {
      console.log("chosenPlayer changed NOW")
      fetch('http://localhost:8080/api/gamestate/getActivePlayer')
      .then(res => res.json())
      .then(player => setActivePlayerHand(player.hand))
    },[chosenPlayer])
    console.log("ActivePlayerHand from line 42 " + activePlayerHand)
  
  
  
  return (
      <>
        <PlayerNew/>
        {cards.length}
        {players.length}
        {/* {chosenPlayer.deck && chosenPlayer.deck.map((card) => (
          <div key={card.id}>
            <p>Name of Card: {card.name} || Power: {card.power}</p>
          </div>
        ))} */}
          <Hand chosenPlayer = {chosenPlayer}/>
          <Game setActivePlayerId = {setActivePlayerId}/>
      </>
    );
}

export default App;