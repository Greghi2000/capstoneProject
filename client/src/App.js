import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [cards, setCards] = useState([]);

useEffect(() => {
    fetch('http://localhost:8080/cards')
    .then(res => res.json())
    .then(cards => setCards(cards))
  },[])

  return (
    <>
    {cards.length}
    </>
  )
}

export default App;