package com.eehrs.back_end;


import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.eehrs.back_end.db.ActivityLog;
import com.eehrs.back_end.db.ActivityLogRepository;
import com.eehrs.back_end.db.User;
import com.eehrs.back_end.db.UserRepository;
import com.eehrs.back_end.email.EmailServiceImpl;

@SpringBootApplication
public class BackEndApplication implements CommandLineRunner {
	@Autowired
	private UserRepository repository;
	@Autowired
	private ActivityLogRepository arepo;

	
	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}
	@Override
	public void run(String ...args )throws Exception {
		
		User user1=new User("betel","ameha","betel.ameha@gmail.com","admin",
				"Addis Ababa","nefas silk","male",07,"0911448312",null,LocalDate.now(),LocalDate.now(),"blabla","blabla","blablabla",12);
		repository.save(user1);		
		arepo.save(new ActivityLog("blabla","blabla1",user1));
	}
	
}
