import './App.css';
import { useState, useEffect } from 'react';
import PlayerNew from './components/PlayerNew';
import Game from './components/Game';
import HandSelection from './components/HandSelection';
import Hand from './components/Hand'


function App() {

  const [players, setPlayers] = useState([]);
  const [chosenPlayer, setChosenPlayer] = useState(null);
  const [activePlayerId, setActivePlayerId] = useState("");
  const [activePlayerHand, setActivePlayerHand] = useState([]);
  const [chosenCard, setChosenCard] = useState(null);
  const [submitted, setSubmitted] = useState([]);
  const [toggledPlayerSumbmit, setToggledPlayerSumbmit] = useState([]);
  const [hand, setHand] = useState([]);


    
    useEffect(() => {
      fetch('http://localhost:8080/api/players')
      .then(res => res.json())
      .then(players => setPlayers(players))
    },[])

    // ready to change player when dependency changes
    useEffect(() => {
      setHand([])
        fetch(`http://localhost:8080/api/player/${activePlayerId}`)
        .then(res => res.json())
        .then(player => setChosenPlayer(player))
      },[activePlayerId])
      

    // when chosen player, get the chosen player from back and sets hand in state (to be passed to hand component)
    useEffect(() => {
      // Fetch the chosen player's hand when the chosenPlayer changes
      if (chosenPlayer) {
        console.log('chosenPlayer changed  is: ' + chosenPlayer.name);
        fetch(`http://localhost:8080/api/gamestate/getActivePlayer`)
          .then((res) => res.json())
          .then((player) => setActivePlayerHand(player.hand))
          // .then((player) => console.log("player when selecting hand", player))
          .catch((error) => {
            console.error('Error fetching active player hand:', error);
          });
        }
    }, [submitted]); // this use effect is not being called???
  
  
  
  return (
      <>
        <PlayerNew/>
        {/* {players.length}
        {chosenPlayer.deck && chosenPlayer.deck.map((card) => (
          <div key={card.id}>
            <p>Name of Card: {card.name} || Power: {card.power}</p>
          </div>
        ))} */}
          <Game setActivePlayerId = {setActivePlayerId}/>
          <HandSelection chosenPlayer = {chosenPlayer} setSubmitted ={setSubmitted} hand = {hand}
          setHand = {setHand}/>
          <Hand setSubmitted ={setSubmitted} activePlayerHand ={activePlayerHand}
            setChosenPlayer={setChosenPlayer} setActivePlayerId={setActivePlayerId}
          />
      </>
    );
}

export default App;