package com.example.capstoneProject;

import com.example.capstoneProject.Service.GameService;
import com.example.capstoneProject.controller.CardController;
import com.example.capstoneProject.models.Cards.Card;
import com.example.capstoneProject.models.Player;
import com.example.capstoneProject.repositories.CardRepository;
import com.example.capstoneProject.repositories.PlayerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class CapstoneProjectApplicationTests {

	@Autowired
	CardController cardController;
	@Autowired
	CardRepository cardRepository;
	@Autowired
	PlayerRepository playerRepository;

	@Test
	void contextLoads() {
	}

	@Test
	void canFetch(){

	}
	@Test
	public void canFindMeleeCards(){
		List<Card> foundCards = cardRepository.findByRowType("Melee");
		for (Card card : foundCards){
			System.out.println(card.getRowType());
		}
		assertEquals("Melee", foundCards.get(0).getRowType());
	}
	@Test
	public void canFindRangeCards(){
		List<Card> foundCards = cardRepository.findByRowType("Range");
		for (Card card : foundCards){
			System.out.println(card.getRowType());
		}
		assertEquals("Range", foundCards.get(0).getRowType());
	}
	@Test
	public void canFindSiegeCards(){
		List<Card> foundCards = cardRepository.findByRowType("Siege");
		for (Card card : foundCards){
			System.out.println(card.getRowType());
		}
		assertEquals("Siege", foundCards.get(0).getRowType());
	}
	@Test
	public void canGetStarterDeck(){
		Player player = new Player("Hello");
		playerRepository.save(player);
		GameService newGame = new GameService(cardRepository);
		newGame.starterDeck(player);
		System.out.println(player.getDeck());
		assertEquals(player.getDeck().size(), 15);
	}
}
