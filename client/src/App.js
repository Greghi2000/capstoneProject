import './App.css';
import { useState, useEffect } from 'react';
import Hand from './components/Hand';
import PlayerNew from './components/PlayerNew';
import Game from './components/Game';


function App() {

  const [players, setPlayers] = useState([]);
  const [chosenPlayer, setChosenPlayer] = useState(null);
  const [activePlayerId, setActivePlayerId] = useState("");
  const [activePlayerHand, setActivePlayerHand] = useState([]);

    
    //Does this run at the start: what players is it getting?
    useEffect(() => {
      fetch('http://localhost:8080/api/players')
      .then(res => res.json())
      .then(players => setPlayers(players))
    },[])

    //ready to change player when dependency changes
    useEffect(() => {
        fetch(`http://localhost:8080/api/player/${activePlayerId}`)
        .then(res => res.json())
        .then(player => setChosenPlayer(player))
      },[activePlayerId])

// console.log("Chosen Player is right now: " + chosenPlayer.name)
      

    // when chosen player, get the chosen player from back and sets hand in state (to be passed to hand component)
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