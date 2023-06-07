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
    public void startGame() {
        gameService.startGame();
    }
}
