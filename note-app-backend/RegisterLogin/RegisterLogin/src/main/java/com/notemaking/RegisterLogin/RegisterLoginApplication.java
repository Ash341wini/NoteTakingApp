package com.notemaking.RegisterLogin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.stereotype.Component;

//@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
@Component
@SpringBootApplication(exclude = SecurityAutoConfiguration.class)

public class RegisterLoginApplication {

	public static void main(String[] args) {
		SpringApplication.run(RegisterLoginApplication.class, args);
	}

}
