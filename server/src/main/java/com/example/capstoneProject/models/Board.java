package com.example.capstoneProject.models;

import com.example.capstoneProject.models.Cards.Card;
import com.example.capstoneProject.models.Cards.Melee;
import com.example.capstoneProject.models.Cards.Range;
import com.example.capstoneProject.models.Cards.Siege;

import java.util.ArrayList;

public class Board {
    Player player1;
    Player player2;
    Range range;
    Melee melee;
    Siege siege;
    ArrayList<Card> deployedCardsPlayer1;
    ArrayList<Card> deployedCardsPlayer2;

    public Board(Player player1, Player player2, Range range, Melee melee, Siege siege, ArrayList<Card> deployedCardsPlayer1, ArrayList<Card> deployedCardsPlayer2) {
        this.player1 = player1;
        this.player2 = player2;
        this.range = range;
        this.melee = melee;
        this.siege = siege;
        this.deployedCardsPlayer1 = deployedCardsPlayer1;
        this.deployedCardsPlayer2 = deployedCardsPlayer2;
    }

    public Board() {
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

    public Range getRange() {
        return range;
    }

    public void setRange(Range range) {
        this.range = range;
    }

    public Melee getMelee() {
        return melee;
    }

    public void setMelee(Melee melee) {
        this.melee = melee;
    }

    public Siege getSiege() {
        return siege;
    }

    public void setSiege(Siege siege) {
        this.siege = siege;
    }

    public ArrayList<Card> getDeployedCardsPlayer1() {
        return deployedCardsPlayer1;
    }

    public void setDeployedCardsPlayer1(ArrayList<Card> deployedCardsPlayer1) {
        this.deployedCardsPlayer1 = deployedCardsPlayer1;
    }

    public ArrayList<Card> getDeployedCardsPlayer2() {
        return deployedCardsPlayer2;
    }

    public void setDeployedCardsPlayer2(ArrayList<Card> deployedCardsPlayer2) {
        this.deployedCardsPlayer2 = deployedCardsPlayer2;
    }
}
