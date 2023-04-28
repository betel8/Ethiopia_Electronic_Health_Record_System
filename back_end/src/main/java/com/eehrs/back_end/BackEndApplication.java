package com.eehrs.back_end;


import java.time.LocalDate;
import java.time.LocalDateTime;

import com.eehrs.back_end.db.entity.SuperAdmin;
import com.eehrs.back_end.db.repository.SuperAdminRepostitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

import com.eehrs.back_end.db.entity.ActivityLog;
import com.eehrs.back_end.db.entity.User;
import com.eehrs.back_end.db.repository.ActivityLogRepository;
import com.eehrs.back_end.db.repository.UserRepository;

@EnableConfigurationProperties(RsaKeyProperties.class)
@SpringBootApplication
public class BackEndApplication  {
	@Autowired
	private UserRepository repository;
	@Autowired
	private ActivityLogRepository arepo;


	
	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}
 
	@Bean
	CommandLineRunner commandLineRunner(UserRepository userRepo) {
		return args->{
			repository.save(new User("Betel","Ameha","betel.ameha@gmail.com","SuperAdmin","Addis Ababa",
					"Nefas silk","male",07,"0911448312",null,LocalDate.now(),
					LocalDate.now(),"unity","addis","amharic",3.2f));
			//User user=userRepository.findByEmail("betel.ameha@gmail.com").get();
			//System.out.println(user.getEmail());
			
		};
	}
	
}
