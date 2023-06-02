package com.example.capstoneProject.repositories;

import com.example.capstoneProject.models.Card;
import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
public interface CardRepository extends JpaRepository<Card, Long> {
}
