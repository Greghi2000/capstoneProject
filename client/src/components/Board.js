import React, { useEffect, useState } from "react";
import "../components/Board.css";
import Card from "./Card";

const Board = ({ newPlayers, activePlayer }) => {
  const [board, setBoard] = useState(null);
  const [listOf2Players, setListOf2Players] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/gamestate/getBoard")
      .then((res) => res.json())
      .then((boardData) => setBoard(boardData))
      .catch((error) => console.error(error));
  }, [activePlayer]);

  useEffect(() => {
    fetch("http://localhost:8080/api/gamestate/getPlayerList")
      .then((res) => res.json())
      .then((playerObj) => setListOf2Players(playerObj))
      .catch((error) => console.error(error));
  }, [activePlayer]);

  let listofPlayersLives = [];
  let listofPlayersNames = [];

  if (listOf2Players && Object.keys(listOf2Players).length !== 0) {
    listofPlayersLives = listOf2Players.map((playerObj) => {
      return playerObj.lives;
    });
    listofPlayersNames = listOf2Players.map((playerObj) => {
      return playerObj.name;
    });

    console.log("These are the two player lives ", listofPlayersLives);
  }

  if (!board) {
    return <p>Loading...</p>;
  }

  const { player1Cards, player2Cards, player1scores, player2scores } = board;

  return (
    <div className="Board">
      <div className="player-ranks">
        <div className="rank">
          <div className="card-container">
          <h3>🔨 {player1scores.Siege}</h3>
            {player1Cards.Siege.map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </div>
        <div className="rank">
          <div className="card-container">
          <h3>🏹 {player1scores.Range}</h3>
            {player1Cards.Range.map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </div>
        <div className="rank">
          <div className="card-container">
          <h3>⚔️ {player1scores.Melee}</h3>
            {player1Cards.Melee.map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </div>
      </div>

      <div className="player-score-container">
        <h2 className="player-score">
          Name: {`${listofPlayersNames[0]}`} Lives: {`${listofPlayersLives[0]}`} Total Score: {player1scores.Total}
        </h2>
      </div>

      <div className="player-score-container">
        <h2 className="player-score">
          Name: {`${listofPlayersNames[1]}`} Lives: {`${listofPlayersLives[1]}`} Total Score: {player2scores.Total}
        </h2>
      </div>

      <div className="player-ranks">
        <div className="rank">
          <div className="card-container">
          <h3>⚔️ {player2scores.Melee}</h3>
            {player2Cards.Melee.map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </div>
        <div className="rank">
          <div className="card-container">
          <h3>🏹 {player2scores.Range}</h3>
            {player2Cards.Range.map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </div>
        <div className="rank">
          <div className="card-container">
          <h3>🔨 {player2scores.Siege}</h3>
            {player2Cards.Siege.map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
