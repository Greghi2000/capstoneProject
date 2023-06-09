import './App.css';
import { useState, useEffect } from 'react';
import Hand from './components/Hand';
import PlayerNew from './components/PlayerNew';
import Game from './components/Game';


function App() {

  const [cards, setCards] = useState([]);
  const [players, setPlayers] = useState([]);
  const [chosenPlayer, setChosenPlayer] = useState([]);
  const [activePlayerId, setActivePlayerId] = useState("");
  const [activePlayerHand, setActivePlayerHand] = useState([]);

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
      fetch(`http://localhost:8080/api/players/${activePlayerId}`)
      .then(res => res.json())
      .then(player => setChosenPlayer(player))
    },[activePlayerId])
    console.log(chosenPlayer)
    // useEffect(() => {
    //   if (Object.keys(chosenPlayer).length > 0)
    //   console.log("chosenPlayer changed NOW")
    //   fetch('http://localhost:8080/api/gamestate/getHand')
    //   .then(res => res.json())
    //   .then(hand => setActivePlayerHand(hand))
    // },[chosenPlayer])
    // console.log("ActivePlayerHand " + activePlayerHand.hand)
  
  
  
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