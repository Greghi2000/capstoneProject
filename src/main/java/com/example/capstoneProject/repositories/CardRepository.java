package com.example.capstoneProject.repositories;

import com.example.capstoneProject.models.Cards.Card;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardRepository extends JpaRepository<Card, Long> {
}
