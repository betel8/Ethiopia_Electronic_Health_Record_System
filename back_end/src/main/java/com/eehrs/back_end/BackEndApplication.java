package com.eehrs.back_end;


import java.time.LocalDate;
import java.time.LocalDateTime;

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




	
	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}
 
	@Bean
	CommandLineRunner commandLineRunner(UserRepository userRepo) {
		return args->{
			AcademicDetail academicDetail=new AcademicDetail(3.2,LocalDate.now(),"unity");
			academicDetailRepository.save(academicDetail);
			PersonalDetail personalDetail=new PersonalDetail("Betel","Ameha","Addis","nesla",
					"male","0911448312","Addis","Ameharic",07,LocalDate.now(),
					null,academicDetail);
			personalDetailRepository.save(personalDetail);
			User Super=new User("betel.ameha@gmail.com",personalDetail,"admin");
			userRepo.save(Super);
		};
	}
	
}
