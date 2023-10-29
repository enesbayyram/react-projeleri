package com.enesbayram.questapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@ComponentScan(basePackages = {"com.enesbayram"})
@EntityScan(basePackages = {"com.enesbayram"})
@EnableJpaRepositories(basePackages = {"com.enesbayram"})
@SpringBootApplication
public class QuestAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuestAppApplication.class, args);
	}

}
