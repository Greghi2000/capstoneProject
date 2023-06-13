import React, { useEffect, useState } from "react";
import "../components/Board.css";

const Board = ({ activePlayer }) => {
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
    <div className="Board">
      <div className="row">
        <div className="p1-siege-rank">
          <h3>Siege</h3>
          <div>
            {player1Cards.Siege.map((card, index) => (
              <p key={index}>
                {card.name} {card.power}
              </p>
            ))}
          </div>
          <p>Score: {player1scores.Siege}</p>
        </div>
        <div className="p1-range-rank">
          <h3>Range</h3>
          <div>
            {player1Cards.Range.map((card, index) => (
              <p key={index}>
                {card.name} {card.power}
              </p>
            ))}
          </div>
          <p>Score: {player1scores.Range}</p>
        </div>
        <div className="p1-melee-rank">
          <h3>Melee</h3>
          <div>
            {player1Cards.Melee.map((card, index) => (
              <p key={index}>
                {card.name} {card.power}
              </p>
            ))}
          </div>
          <p className="p1-melee-score">Score: {player1scores.Melee}</p>
        </div>
      </div>

      <div className="player-score-container">
        <h2 className="player-score">Player 1 Total Score: {player1scores.Total}</h2>
        <h2 className="player-score">Player 2 Total Score: {player2scores.Total}</h2>
      </div>

      <div className="row">
        <div className="p2-melee-rank">
          <h3>Melee</h3>
          <div>
            {player2Cards.Melee.map((card, index) => (
              <p key={index}>
                {card.name} {card.power}
              </p>
            ))}
          </div>
          <p>Score: {player2scores.Melee}</p>
        </div>
        <div className="p2-range-rank">
          <h3>Range</h3>
          <div>
            {player2Cards.Range.map((card, index) => (
              <p key={index}>
                {card.name} {card.power}
              </p>
            ))}
          </div>
          <p>Score: {player2scores.Range}</p>
        </div>
        <div className="p2-siege-rank">
          <h3>Siege</h3>
          <div>
            {player2Cards.Siege.map((card, index) => (
              <p key={index}>
                {card.name} {card.power}
              </p>
            ))}
          </div>
          <p>Score: {player2scores.Siege}</p>
        </div>
      </div>
    </div>
  );
};

export default Board;