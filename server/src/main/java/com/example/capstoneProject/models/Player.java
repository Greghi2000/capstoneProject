package com.example.capstoneProject.models;

import com.example.capstoneProject.models.Cards.Card;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "players")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "player_number")
    private int playerNumber;

    @JsonIgnoreProperties({"players", "hibernateLazyInitializer"})
    @ManyToMany
    @JoinTable(
            name = "decks",
            joinColumns = {
                    @JoinColumn(
                            name = "player_id",
                            nullable = false,
                            updatable = false
                    )
            },
            inverseJoinColumns = {
                    @JoinColumn(
                            name = "card_id",
                            nullable = false,
                            updatable = false
                    )
            }
    )
    private List<Card> deck;

    @Transient
    private List<Card> hand;

    @Column(name = "lives")
    private int lives;

    @Column(name = "has_passed")
    private boolean hasPassed;

    public Player(String name){
        this.name = name;
        this.deck = new ArrayList<>();
        this.hand = new ArrayList<>();
        this.playerNumber = 0;
        lives = 2;
        hasPassed = false;
    }

    public Player() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPlayerNumber() {
        return playerNumber;
    }

    public void setPlayerNumber(int playerNumber) {
        this.playerNumber = playerNumber;
    }

    public List<Card> getDeck() {
        return deck;
    }

    public void setDeck(List<Card> deck) {
        this.deck = deck;
    }

    public List<Card> getHand() {
        return hand;
    }

    public void setHand(List<Card> hand) {
        this.hand = hand;
    }

    public int getLives() {
        return lives;
    }

    public void setLives(int lives) {
        this.lives = lives;
    }

    public boolean isHasPassed() {
        return hasPassed;
    }

    public void setHasPassed(boolean hasPassed) {
        this.hasPassed = hasPassed;
    }
}
