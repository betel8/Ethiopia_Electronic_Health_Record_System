package com.eehrs.back_end;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.eehrs.back_end.db.ActivityLog;
import com.eehrs.back_end.db.ActivityLogRepository;
import com.eehrs.back_end.db.User;
import com.eehrs.back_end.db.UserRepository;

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
		User user1=new User("betel","ameha","betel8","$2a$10$8cjz47bjbR4Mn8GMg9IZx.vyjhLXR/SKKMSZ9.mP9vpMu0ssKi8GW","admin");
		repository.save(user1);		
		arepo.save(new ActivityLog("blabla","blabla1",user1));

		
	}
	
}
