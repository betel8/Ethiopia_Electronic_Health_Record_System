package com.eehrs.back_end;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.eehrs.back_end.db.Doctor;
import com.eehrs.back_end.db.User;
import com.eehrs.back_end.db.UserRepository;

@SpringBootApplication
public class BackEndApplication implements CommandLineRunner {
	@Autowired
	private UserRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}
	@Override
	public void run(String ...args )throws Exception {
		repository.save(new User("betel","ameha"));
		repository.save(new User("neba","belete"));
		repository.save(new Doctor("neba","belete"));
		
	}

}
