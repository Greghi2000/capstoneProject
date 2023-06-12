import { useEffect } from "react";
import React, { useState } from "react";

const Board = () => {

    const [board, setBoard] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8080/api/gamestate/getBoard')
        .then(res => res.json())
        .then(board => setBoard(board))
      },[])
      console.log(board)
    return (
        <>

        </>
    );
}
 
export default Board;