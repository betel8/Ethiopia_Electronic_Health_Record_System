package com.eehrs.back_end.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.eehrs.back_end.db.entity.Pharmacist;
import com.eehrs.back_end.db.repository.PharmacistRepository;
import com.eehrs.back_end.email.EmailServiceImpl;

@RestController
public class PharmacistController {
	@Autowired
	private PharmacistRepository pharmacistRepo;
	@Autowired
	private EmailServiceImpl service;
	@PostMapping("/add/pharmacist")
	@ResponseBody
	public void setUser(@RequestBody Pharmacist pharmacist) throws Exception {
		String temPassword=pharmacist.getPassword();
		service.temporaryPasswordEmail("betel.ameha@gmail.com","new password" , temPassword);
		pharmacistRepo.save(pharmacist);
	}
}
