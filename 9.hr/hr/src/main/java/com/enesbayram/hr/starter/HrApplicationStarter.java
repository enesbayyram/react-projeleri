package com.enesbayram.hr.starter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = {"com.enesbayram"})
@EnableJpaRepositories(basePackages = {"com.enesbayram"})
@ComponentScan(basePackages = {"com.enesbayram"})
//@PropertySource(value = "classpath:application-dev.yml")
public class HrApplicationStarter {

	public static void main(String[] args) {
		SpringApplication.run(HrApplicationStarter.class, args);
	}

}
