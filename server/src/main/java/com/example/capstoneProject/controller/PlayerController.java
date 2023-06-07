package com.example.capstoneProject.controller;
import com.example.capstoneProject.models.Cards.Card;
import com.example.capstoneProject.models.Player;
import com.example.capstoneProject.repositories.PlayerRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping
public class PlayerController {

    @Autowired
    PlayerRepository playerRepository;

    @PostMapping(value = "/api/players")
    public Player createPlayer(@RequestBody Player player) {
        System.out.println(player.getName());
        playerRepository.save(player);
        return player;
    }
    @GetMapping(value = "/api/players")
    public ResponseEntity<List<Player>> getAllPlayers() {
        return new ResponseEntity<>(playerRepository.findAll(), HttpStatus.OK);
    }
    @GetMapping(value = "/api/players/{id}")
    public ResponseEntity<Optional<Player>> getPlayerById(@PathVariable Long id) {
        return  new ResponseEntity<>(playerRepository.findById(id), HttpStatus.OK);
    }
    @PostMapping(value = "/api/players/hand")
//    public ArrayList<Card> createHand(@RequestBody ArrayList<Card> hand) {
    public String createHand(@RequestBody String hand) {
        System.out.println(hand);
//        playerRepository.save(player);
        return hand;
    }
}

