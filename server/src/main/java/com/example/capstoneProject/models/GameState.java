package com.example.capstoneProject.models;

import com.example.capstoneProject.Service.GameService;

import java.util.ArrayList;

public class GameState {
    private Player currentPlayer;
    private ArrayList<Player> listOfPlayers;
    private Board board;
//    private GameService gameService;

    public GameState(Player currentPlayer, ArrayList<Player> listOfPlayers, Board board) {
        this.currentPlayer = currentPlayer;
        this.listOfPlayers = listOfPlayers;
        this.board = board;
//        this.gameService = gameService;
    }

    public Player getCurrentPlayer() {
        return currentPlayer;
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
