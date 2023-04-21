package com.eehrs.back_end.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.eehrs.back_end.db.entity.Doctor;
import com.eehrs.back_end.db.repository.DoctorRepository;
import com.eehrs.back_end.email.EmailServiceImpl;

@RestController
public class DoctorController {
	@Autowired
	private DoctorRepository doctorRepo;
	@Autowired
	private EmailServiceImpl service;
	@PostMapping("/add/doctor")
	@ResponseBody
	public void setUser(@RequestBody Doctor doctor) throws Exception {
		String temPassword=doctor.generateSecurePassword();
		service.temporaryPasswordEmail("betel.ameha@gmail.com","new password" , temPassword);
		doctorRepo.save(doctor);
	}
	
}
