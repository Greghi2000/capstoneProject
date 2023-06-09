package com.example.capstoneProject.Service;

//import com.example.capstoneProject.controller.CardController;
import com.example.capstoneProject.models.Board;
import com.example.capstoneProject.models.Cards.Card;
import com.example.capstoneProject.models.GameState;
import com.example.capstoneProject.models.Player;
import com.example.capstoneProject.repositories.CardRepository;
import com.example.capstoneProject.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class GameService {
    Board board;
    private Player currentPlayer;
    private ArrayList<Player> listOfPlayers;

    CardRepository cardRepository;

    PlayerRepository playerRepository;
    GameState gameState;

    public GameService(CardRepository cardRepository) {
        this.board = null;
//        this.currentPlayer = currentPlayer;
        this.listOfPlayers = listOfPlayers;
        this.cardRepository = cardRepository;
        this.gameState = new GameState();
    }

    // gamecontroller{ (POST) -> /api/game/start -> gameservice.startNewGame() -> instantiate a new gamestate object}
    // gamecontroller{ (GET) -> /api/game/getCurrent/id -> gameservice.getCurrentGame() -> return the gamestate ID}

    public void startGame(){
        GameState gameState = new GameState();
        this.setGameState(gameState);
        System.out.println("GAME WAS STARTED");
    }
    public void setActivePlayerForStart(){
        Player activePlayer = gameState.getListOfPlayers().get(0);
        gameState.setCurrentPlayer(activePlayer);

    }
    public void togglePlayer(){
        Player retreivedActivePlayer = this.getCurrentPlayer();
        if (retreivedActivePlayer == this.listOfPlayers.get(0)) {
            setCurrentPlayer(this.listOfPlayers.get(1));
        } else if (retreivedActivePlayer == this.listOfPlayers.get(1)) {
            setCurrentPlayer(this.listOfPlayers.get(0));
        }
    }

    public GameState getGameState() {
        return gameState;
    }

    public void setGameState(GameState gameState) {
        this.gameState = gameState;
    }

    public Board getBoard() {
        return board;
    }

    public void setBoard(Board board) {
        this.board = board;
    }

    public Player getCurrentPlayer() {
        return currentPlayer;
    }

    public void setCurrentPlayer(Player currentPlayer) {
        this.currentPlayer = currentPlayer;
    }

    public ArrayList<Player> getListOfPlayers() {
        return listOfPlayers;
    }

    public void setListOfPlayers(ArrayList<Player> listOfPlayers) {
        this.listOfPlayers = listOfPlayers;
    }

    public CardRepository getCardRepository() {
        return cardRepository;
    }

    public void setCardRepository(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    //    public ResponseEntity<List<Card>> getData(){
//        CardController controller = new CardController();
//        System.out.println(controller.getAllCards());
//        return controller.getAllCards();
//    }
public ArrayList<Card> starterDeck(Player player) {
    ArrayList<Card> deck = new ArrayList<>();
    int i = 1;
    while (i <= 30) {
        double randomNum = Math.random();
        long finalRandomNum = Math.round((randomNum * 45) + 1);
        boolean existsInDeck = deck.stream().anyMatch(card -> card.getId() == finalRandomNum);
        if (existsInDeck) {
            continue;
        }
        Card cardFromDb = cardRepository.getReferenceById(finalRandomNum);
        cardFromDb.getPlayers().add(player);
        cardRepository.save(cardFromDb);
        deck.add(cardFromDb);
        i++;
    }
    player.setDeck(deck);



//    ArrayList<Player> listOfGSPlayers = getGameState().getListOfPlayers();
//    System.out.println(getGameState().getListOfPlayers());
//    for (Player playerGS : listOfGSPlayers) {
//        if (player.getName() == playerGS.getName()) {
//            playerGS.setDeck(deck);
//        }
//    }

//    for (Player thisPlayer : gameState.getListOfPlayers()){
//        if(player.getId() == thisPlayer.getId()){
//            thisPlayer = player;
//        }
//    }
    return deck;
}

    public ArrayList<Card> fetchPlayerDeck(Player player){
        player.getDeck();
        return null;
    }
    public ArrayList<Card> playerDeckCheck(Player player){
        // check if player has a deck/exists already
        // if he does fetch deck from DB
        // if not generate new deck by calling generateNewDeck()
        return null;
    }

    public void chooseHand(List<Card> hand) {
        getGameState().getCurrentPlayer().setHand(hand);
        System.out.println("This is the hand that we got from reat!!!" + getGameState().getCurrentPlayer().getHand());
    }

//    public void startSetup() {
//        //wait for react to get player names
//        //check if player exists in DB (call playerDeckCheck())
//        //call getPlayerHand(), fetches the hand selection of the player from react
//
//        // Get player names and initialize players from react
//        //set players to gameclass
//
//        // Initialize the board
//        board = new Board(player1, player2);
//
//        // Start the game
//        playGame();
//    }
//
//    private void playGame() {
//        // Implement the main game loop
//        boolean gameOver = false;
//
//        while (!gameOver) {
//            // Begin the round
//            player1.setHasPassed(false);
//            player2.setHasPassed(false);
//
//            // Begin the turn for player1
//            playTurn(player1);
//
//            // Check if the round or game is over
//            if (isRoundOver()) {
//                endRound();
//                if (isGameOver()) {
//                    gameOver = true;
//                }
//            }
//
//            // Begin the turn for player2
//            playTurn(player2);
//
//            // Check if the round or game is over
//            if (isRoundOver()) {
//                endRound();
//                if (isGameOver()) {
//                    gameOver = true;
//                }
//            }
//        }
//
//        // End the game
//        endGame();
//    }
//
//    //playTurn()
//        //prompt player to make a move(choose a card to play)
//        //pass chosen card to board
//        //board then puts card in correct row for display and updates the row tally
//
//    private boolean isRoundOver() {
//
//        return (player1.getHand().isEmpty() && player2.getHand().isEmpty()) ||
//                (player1.isHasPassed() && player2.isHasPassed()) ||
//                (player1.getHand().isEmpty() && player2.isHasPassed()) ||
//                (player1.isHasPassed()  && player2.getHand().isEmpty());
//    }
}
