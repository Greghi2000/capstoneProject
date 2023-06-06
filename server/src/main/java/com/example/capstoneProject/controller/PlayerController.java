package com.example.capstoneProject.controller;
import com.example.capstoneProject.models.Cards.Card;
import com.example.capstoneProject.models.Player;
import com.example.capstoneProject.repositories.PlayerRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping
public class PlayerController {

    @Autowired
    PlayerRepository playerRepository;

    @PostMapping(value = "/api/players")
    public Player createPlayer(@RequestBody Player player) {
//    public String createPlayer(@RequestBody String string) {
        System.out.println(player.getName());
        playerRepository.save(player);
        return player;
    }
    @GetMapping(value = "/api/players")
    public ResponseEntity<List<Player>> getAllPlayers() {
        return new ResponseEntity<>(playerRepository.findAll(), HttpStatus.OK);
    }
    @GetMapping(value = "/api/players/{id}")
    public ResponseEntity<List<Player>> getPlayerById() {
        return  new ResponseEntity<>(playerRepository.findAll(), HttpStatus.OK);
    }
}

