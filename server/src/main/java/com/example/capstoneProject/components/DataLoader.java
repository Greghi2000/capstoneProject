package com.example.capstoneProject.components;

import com.example.capstoneProject.models.Cards.Card;
import com.example.capstoneProject.models.Cards.Unit;
import com.example.capstoneProject.repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Profile("!test")
@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    CardRepository cardRepository;
    public DataLoader(){

    }
    public void run (ApplicationArguments args){
        Card cardHigherVampireTheSecond = new Card(
                "Regis: Higher Vampire the Second",
                "Vampire",
                "Deploy, Melee: Drain all boosts from an enemy.\n",
                "<span class=\"keyword deploy\">Deploy</span>, <span class=\"keyword melee\">Melee</span>: <span class=\"keyword drain\">Drain</span> all boosts from an enemy.\n",
                "<span class=\"keyword\">Deploy:</span> Trigger this ability when played.\n <span class=\"keyword\">Melee:</span> This ability can only be used while on the melee row.\n <span class=\"keyword\">Drain:</span> Deal damage and boost self by the same amount.",
                "He becomes invisible at will. His glance hypnotizes into a deep sleep. He then drinks his fill, turns into a bat and flies off. Altogether uncouth.",
                1012,
                112106,
                1002,
                "BaseSet",
                "Unit",
                0,
                "Gold",
                3,
                0,
                "Marek Madej",
                "Legendary",
                "Neutral",
                "",
                9,
                "",
                "Melee"
        );
        Card cardHigherVampireTheThird = new Card(
                "Regis: Higher Vampire the Third",
                "Vampire",
                "Deploy, Melee: Drain all boosts from an enemy.\n",
                "<span class=\"keyword deploy\">Deploy</span>, <span class=\"keyword melee\">Melee</span>: <span class=\"keyword drain\">Drain</span> all boosts from an enemy.\n",
                "<span class=\"keyword\">Deploy:</span> Trigger this ability when played.\n <span class=\"keyword\">Melee:</span> This ability can only be used while on the melee row.\n <span class=\"keyword\">Drain:</span> Deal damage and boost self by the same amount.",
                "He becomes invisible at will. His glance hypnotizes into a deep sleep. He then drinks his fill, turns into a bat and flies off. Altogether uncouth.",
                1012,
                112106,
                1002,
                "BaseSet",
                "Unit",
                0,
                "Gold",
                3,
                0,
                "Marek Madej",
                "Legendary",
                "Neutral",
                "",
                9,
                "",
                "Range"
        );
        Card cardHigherVampireTheFourth = new Card(
                "Regis: Higher Vampire the Fourth",
                "Vampire",
                "Deploy, Melee: Drain all boosts from an enemy.\n",
                "<span class=\"keyword deploy\">Deploy</span>, <span class=\"keyword melee\">Melee</span>: <span class=\"keyword drain\">Drain</span> all boosts from an enemy.\n",
                "<span class=\"keyword\">Deploy:</span> Trigger this ability when played.\n <span class=\"keyword\">Melee:</span> This ability can only be used while on the melee row.\n <span class=\"keyword\">Drain:</span> Deal damage and boost self by the same amount.",
                "He becomes invisible at will. His glance hypnotizes into a deep sleep. He then drinks his fill, turns into a bat and flies off. Altogether uncouth.",
                1012,
                112106,
                1002,
                "BaseSet",
                "Unit",
                0,
                "Gold",
                3,
                0,
                "Marek Madej",
                "Legendary",
                "Neutral",
                "",
                9,
                "",
                "Siege"
        );
        Card cardHigherVampireTheFifth = new Card(
                "Regis: Higher Vampire the Fourth",
                "Vampire",
                "Deploy, Melee: Drain all boosts from an enemy.\n",
                "<span class=\"keyword deploy\">Deploy</span>, <span class=\"keyword melee\">Melee</span>: <span class=\"keyword drain\">Drain</span> all boosts from an enemy.\n",
                "<span class=\"keyword\">Deploy:</span> Trigger this ability when played.\n <span class=\"keyword\">Melee:</span> This ability can only be used while on the melee row.\n <span class=\"keyword\">Drain:</span> Deal damage and boost self by the same amount.",
                "He becomes invisible at will. His glance hypnotizes into a deep sleep. He then drinks his fill, turns into a bat and flies off. Altogether uncouth.",
                1012,
                112106,
                1002,
                "BaseSet",
                "Unit",
                0,
                "Gold",
                3,
                0,
                "Marek Madej",
                "Legendary",
                "Neutral",
                "",
                9,
                "",
                "Siege"
        );

        cardRepository.save(cardHigherVampireTheSecond);
        cardRepository.save(cardHigherVampireTheThird);
        cardRepository.save(cardHigherVampireTheFourth);
        cardRepository.save(cardHigherVampireTheFifth);
    }
}
