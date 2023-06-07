package com.example.capstoneProject.Service;

//import com.example.capstoneProject.controller.CardController;
import com.example.capstoneProject.models.Board;
import com.example.capstoneProject.models.Cards.Card;
import com.example.capstoneProject.models.GameState;
import com.example.capstoneProject.models.Player;
import com.example.capstoneProject.repositories.CardRepository;
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
    Player player1;
    Player player2;

    CardRepository cardRepository;
    GameState gameState;

    public GameService(CardRepository cardRepository) {
        this.board = null;
        this.player1 = null;
        this.player2 = null;
        this.cardRepository = cardRepository;
        this.gameState = null;
    }

    // gamecontroller{ (POST) -> /api/game/start -> gameservice.startNewGame() -> instantiate a new gamestate object}
    // gamecontroller{ (GET) -> /api/game/getCurrent/id -> gameservice.getCurrentGame() -> return the gamestate ID}

    public void startGame(){
        GameState gameState = new GameState();
        setGameState(gameState);
        System.out.println("GAME WAS STARTED");
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

    public Player getPlayer1() {
        return player1;
    }

    public void setPlayer1(Player player1) {
        this.player1 = player1;
    }

    public Player getPlayer2() {
        return player2;
    }

    public void setPlayer2(Player player2) {
        this.player2 = player2;
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
