# capstoneProject - A Browser Card Game App

## Project group members
Paul Cumming, Gregorio Fumagalli

## Introduction
This is a brief for a browser game based for a card game. The card game is insipired by Gwent from the Witcher Series.

This brief provides further information on the MVP and extensions for this specific app.

## Project Aim
Create a browser-based Gwent card game app that replicates the key features and gameplay mechanics of the original game.

## MVP
- Turn-based gameplay with rules based on Gwent, including:
  - Implement rarity levels for cards, affecting their power or special abilities
  - Drawing cards at the beginning of the game
  - Playing cards with abilities and power values
  - Taking turns and playing cards strategically
  - Determining the winner based on card power
- A visual display of player's lives and scores
- Integration with the backend to handle game logic and rules
- A feature for players to register and log in to the game
- A deck-building feature where players can create and customize their card decks

## EXTENSIONS
- Implement different factions with unique abilities and card sets
- Include an AI opponent for single-player mode
- Implement a leaderboard to track player rankings and scores

## Uses of APIs
The app will utilize the Spring Boot framework to handle the back-end and game logic. GwentOne API will also be used to make calls to display card images.

## Uses of databases
The app will make use of a database to store player information, including registration details, login credentials, and game progress.


## Intended tech stack

- **Front end**: React, CSS
- **Back End**: Java Spring Boot
- **Databse**: PostgreSQL

Model:
Card: Represents an individual card with its properties.
Deck: Manages the collection of cards.
Player: Represents a player with their hand, score, and other relevant data.
Round: Manages a round of the game, including the cards played and scoring.
GameState: Represents the current state of the game.
Repository:
CardRepository: Handles data access operations for Card entities.
PlayerRepository: Handles data access operations for Player entities.
RoundRepository: Handles data access operations for Round entities.
These repository interfaces can extend JpaRepository or other appropriate interfaces from Spring Data JPA.
Service:
GameService: Implements the game logic, orchestrates player actions, and manages game state. It includes methods for initializing the game, playing cards, passing turns, and managing rounds. It interacts with repositories to persist and retrieve game data.
Controller:
GameController: Handles REST API requests related to the card game. It includes methods for starting the game, playing cards, passing turns, and retrieving game state. The controller interacts with the GameService to perform the corresponding actions.
Database Configuration:
DatabaseConfig: Contains the configuration for connecting to the database, including database URL, credentials, and other required settings.
Application Entry Point:
Application: The main class that bootstraps the Spring Boot application and starts the server.
