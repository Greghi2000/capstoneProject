package com.example.capstoneProject.controller;

import com.example.capstoneProject.Service.GameService;
import com.example.capstoneProject.models.Cards.Card;
import com.example.capstoneProject.models.GameState;
import com.example.capstoneProject.models.Player;
import com.example.capstoneProject.repositories.CardRepository;
import com.example.capstoneProject.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping
public class GameController {
    @Autowired
    PlayerRepository playerRepository;
    @Autowired
    CardRepository cardRepository;
    @Autowired
    GameService gameService;
    @GetMapping(value = "/cards")
    public ResponseEntity<List<Card>> getAllCards(){
        return new ResponseEntity<>(cardRepository.findAll(), HttpStatus.OK);
    }
    @GetMapping(value = "/api/gamestate")
    public ResponseEntity<GameState> getGameState() {
        return new ResponseEntity<>(new GameState(null, null, null), HttpStatus.OK);
    }
    @PostMapping(value = "/api/gamestate")
    public GameState createGameState(@RequestBody GameState gameState) {
        System.out.println(gameState);
        return gameState;
    }
    @PostMapping(value = "/api/game/start")
    public ResponseEntity<HttpStatus> startGame(@RequestBody ArrayList<Player> players) {
        // add the two players to the array list
//        gameService.startGame();
//        gameService.setListOfPlayers(players);
//        gameService.
//        gameService.setActivePlayerForStart();
//        System.out.println("These are the players that will play " + players);
//        System.out.println(gameService.getCurrentPlayer().getName());
//
//        gameService.getGameState().getListOfPlayers();

        gameService.startGame();
        gameService.getGameState().setListOfPlayers(players);
        gameService.setActivePlayerForStart(); //need to make sure to set active player in gameState in this method

        System.out.println("This is the list of players" + gameService.getGameState().getListOfPlayers());
        Player player1 = gameService.getGameState().getListOfPlayers().get(0);
        Player player2 = gameService.getGameState().getListOfPlayers().get(1);

        playerRepository.save(player1);
        playerRepository.save(player2);

        gameService.starterDeck(player1);
        gameService.starterDeck(player2);

        System.out.println("current player deck:" + gameService.getGameState().getCurrentPlayer().getDeck());
        return new ResponseEntity<>(HttpStatus.OK);

    }
    @GetMapping(value = "/api/gamestate/deck")
    public ResponseEntity<Player> getDeckFromGameState() {
        return new ResponseEntity<>(gameService.getGameState().getCurrentPlayer(), HttpStatus.OK);
    }
    @GetMapping(value = "/api/gamestate/getHand")
    public ResponseEntity<Player> getHandFromGameState() {
        return new ResponseEntity<>(gameService.getGameState().getCurrentPlayer(), HttpStatus.OK);
    }


}
