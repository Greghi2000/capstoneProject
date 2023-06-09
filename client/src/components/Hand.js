const Hand = ({chosenPlayer, chosenCard, setChosenCard}) => {

    
    const handleClick = (card, name, power) => {
        console.log(`Clicked on card - Name: ${name} | Power: ${power}`);
      };

      
    return ( 
        <>
    
            {chosenPlayer && chosenPlayer.hand && chosenPlayer.hand.length > 0 ? (
                    chosenPlayer.hand.map((card) => (
                    <div>
                        <p onClick={() => handleClick(card, card.name, card.power)}>
                        Name of Card: {card.name} || Power: {card.power}
                        </p>
                    </div>
                    ))
                ) : (
                    <p>No cards available</p>
                )}a





        </>
     );
}
 
export default Hand;