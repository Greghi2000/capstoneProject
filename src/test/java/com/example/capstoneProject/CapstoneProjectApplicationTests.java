package com.example.capstoneProject;

import com.example.capstoneProject.controller.CardController;
import com.example.capstoneProject.models.Board;
import com.example.capstoneProject.models.Cards.Card;
import com.example.capstoneProject.models.Cards.Range;
import com.example.capstoneProject.models.Cards.Unit;
import com.example.capstoneProject.models.Game;
import com.example.capstoneProject.models.Player;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
class CapstoneProjectApplicationTests {

	@Autowired
	CardController cardController;

	@Test
	void contextLoads() {
	}

	@Test
	void canFetch(){
		ResponseEntity<List<Card>> response = cardController.getAllCards();
		List<Range> cards = response.getBody();
		for (Card card : cards) {
			System.out.println(card.getName());
		}

		System.out.println(cards); // Print the ranges in the terminal
	}
}
