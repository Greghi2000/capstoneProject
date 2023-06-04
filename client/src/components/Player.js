import React, { useState } from 'react'

const Player = ({}) => {

    const [playerName, setPlayerName] = useState('')
    const [playerCards, setPlayerCards] = useState([])

    const handleNameChange = (e) => {
        setPlayerName(e.target.value)
        console.log(e.target.value)
    }


    const handleNewPlayerSubmit = (e) => {
        e.preventDefault()
        console.log("button pressed")
        // handlePlayerAdd(
        //     {
        //         name: playerName
        //     }
        // )
        setPlayerName('')
        setPlayerCards([])
    }

    return (
        <div className="UserNewForm">
            <form onSubmit={handleNewPlayerSubmit}>
                <label htmlFor="newPlayerName">Name:</label>
                <input
                    type="text"
                    id='newPlayerName'
                    name='newPlayerName'
                    onChange={handleNameChange}
                    value={playerName}
                />
                <input type="submit" value="Submit" ></input>
            </form>
        </div>
    );
}

export default Player;