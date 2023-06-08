package com.example.capstoneProject.models;

import com.example.capstoneProject.Service.GameService;
import com.example.capstoneProject.models.Cards.Card;

import java.util.ArrayList;
import java.util.List;

public class GameState {
    private Player currentPlayer;
    private ArrayList<Player> listOfPlayers;
    private Board board;

    public GameState(Player currentPlayer, ArrayList<Player> listOfPlayers, Board board) {
        this.currentPlayer = currentPlayer;
        this.listOfPlayers = listOfPlayers;
        this.board = board;
    }
    // GameState stores the values. Is supposed to reflect the game state from react
    // GameController queries specific values from GameState and sends those to react
    // GameService modifies GameState thru GameController

    public GameState() {
    }

    public Player getCurrentPlayer() {
        return currentPlayer;
    }
    public List<Card> getCurrentPlayersDeck() {
        return currentPlayer.getDeck();
    }

    public void setCurrentPlayer(Player currentPlayer) {
        this.currentPlayer = currentPlayer;
    }

    public ArrayList<Player> getListOfPlayers() {
        return listOfPlayers;
    }

    public void setListOfPlayers(ArrayList<Player> listOfPlayers) {
        this.listOfPlayers = listOfPlayers;
    }

    public Board getBoard() {
        return board;
    }

    public void setBoard(Board board) {
        this.board = board;
    }
}
