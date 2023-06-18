package com.eehrs.back_end;


import java.time.LocalDate;

import com.eehrs.back_end.db.entity.*;
import com.eehrs.back_end.db.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

@EnableConfigurationProperties(RsaKeyProperties.class)
@SpringBootApplication
public class BackEndApplication  {
	@Autowired
	private UserRepository repository;
	@Autowired
	private ActivityLogRepository arepo;
	@Autowired
	private AcademicDetailRepository academicDetailRepository;
	@Autowired
	private PersonalDetailRepository personalDetailRepository;
	@Autowired
	private AdminRepostitory adminRepostitory;




	
	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}
 
	@Bean
	CommandLineRunner commandLineRunner(UserRepository userRepo) {
		return args->{


			User user=new User("betel.ameha@gmail.com","superAdmin");
			PersonalDetail personalDetail=new PersonalDetail("Betel","Ameha","Addis","nesla",
					"male","0911448312","Addis","Ameharic",07,LocalDate.now(),
					null,user);
			AcademicDetail academicDetail=new AcademicDetail(3.2,LocalDate.now(),"unity"
					,"CS",user);
			user.setPersonalDetail(personalDetail);
			user.setAcademicDetail(academicDetail);
			userRepo.save(user);
		};
	}
	
}
