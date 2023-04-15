package com.eehrs.back_end.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.eehrs.back_end.db.Nurse;
import com.eehrs.back_end.db.NurseRepository;
import com.eehrs.back_end.email.EmailServiceImpl;

@RestController
public class NurseController {
	@Autowired
	private NurseRepository nurseRepo;
	@Autowired
	private EmailServiceImpl service;
	@PostMapping("/add/nurse")
	@ResponseBody
	public void setUser(@RequestBody Nurse nurse) throws Exception {
		String temPassword=nurse.generateSecurePassword();
		service.temporaryPasswordEmail("betel.ameha@gmail.com","new password" , temPassword);
		BCryptPasswordEncoder bCrypt=new BCryptPasswordEncoder();
		CharSequence passwordValue=temPassword;
		nurse.setPassword(bCrypt.encode(passwordValue));
		nurseRepo.save(nurse);
	}
	

}
