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
}
