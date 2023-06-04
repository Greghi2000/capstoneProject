package com.example.capstoneProject.controller;
import com.example.capstoneProject.models.Cards.Card;
import com.example.capstoneProject.models.Player;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class PlayerController {
    @PostMapping(value = "/api/players")
//    public Player createPlayer(@RequestBody Player player) {
    public String createPlayer(@RequestBody String string) {
        System.out.println(string);
        Player player = new Player(string);
        return string;
    }
}

