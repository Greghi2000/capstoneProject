import React, { useState } from 'react';
import axios from 'axios';

const Hand = ({ chosenPlayer }) => {
    const [hand, setHand] = useState([]);

    const handleClick = (card, name, power) => {
        console.log(`Clicked on card - Name: ${name} | Power: ${power}`)
        if (hand.length < 10) { // if card is already in array, do not allow to be added again
            setHand((prevHand) => [...prevHand, card]);
        }
        console.log(`Current array list: ${hand}`)
    };

    const handleHandSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:8080/api/players/hand', hand); // No need to have curly brackets because that makes hand the key value for the obj
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            {chosenPlayer.deck &&
                chosenPlayer.deck.map((card) => (
                    <div >
                        <p onClick={() => handleClick(card, card.name, card.power)}>
                            Name of Card: {card.name} || Power: {card.power}
                        </p>
                    </div>
                ))}
            <form onSubmit={handleHandSubmit}>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

export default Hand;