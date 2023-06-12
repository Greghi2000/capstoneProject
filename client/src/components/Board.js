import React, { useEffect, useState } from "react";

const Board = ({activePlayer}) => {
  const [board, setBoard] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/gamestate/getBoard")
      .then((res) => res.json())
      .then((boardData) => setBoard(boardData))
      .catch((error) => console.error(error));
  }, [activePlayer]);

  if (!board) {
    return <p>Loading...</p>;
  }

  const {
    player1Cards,
    player2Cards,
    player1scores,
    player2scores,
  } = board;

  return (
    <div>
      <h2>Player 1</h2>
      <div>
        <h3>Melee</h3>
        <div>
          {player1Cards.Melee.map((card, index) => (
            <p key={index}>{card.name} {card.power}</p>
          ))}
        </div>
        <p>Score: {player1scores.Melee}</p>
      </div>
      <div>
        <h3>Range</h3>
        <div>
          {player1Cards.Range.map((card, index) => (
            <p key={index}>{card.name} {card.power}</p>
          ))}
        </div>
        <p>Score: {player1scores.Range}</p>
      </div>
      <div>
        <h3>Siege</h3>
        <div>
          {player1Cards.Siege.map((card, index) => (
            <p key={index}>{card.name} {card.power}</p>
          ))}
        </div>
        <p>Score: {player1scores.Siege}</p>
      </div>

      <h2>Player 2</h2>
      <div>
        <h3>Melee</h3>
        <div>
          {player2Cards.Melee.map((card, index) => (
            <p key={index}>{card.name} {card.power}</p>
          ))}
        </div>
        <p>Score: {player2scores.Melee}</p>
      </div>
      <div>
        <h3>Range</h3>
        <div>
          {player2Cards.Range.map((card, index) => (
            <p key={index}>{card.name} {card.power}</p>
          ))}
        </div>
        <p>Score: {player2scores.Range}</p>
      </div>
      <div>
        <h3>Siege</h3>
        <div>
          {player2Cards.Siege.map((card, index) => (
            <p key={index}>{card.name} {card.power}</p>
          ))}
        </div>
        <p>Score: {player2scores.Siege}</p>
      </div>
    </div>
  );
};

export default Board;
