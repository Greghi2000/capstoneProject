package com.example.capstoneProject.models;

import com.example.capstoneProject.models.Cards.Card;

import javax.persistence.*;
@Entity
public class Deck {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "player_id")
    private Player player;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "card_id")
    private Card card;

    public Deck(Player player, Card card) {
        this.player = player;
        this.card = card;
    }
}

