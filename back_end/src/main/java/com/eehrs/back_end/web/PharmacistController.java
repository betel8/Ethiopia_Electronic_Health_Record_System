package com.eehrs.back_end.web;

import com.eehrs.back_end.db.entity.Doctor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

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
	@GetMapping("/search/Pharmacist/remove")
	@ResponseBody
	public Iterable<Doctor> searchDoctorRemove(@RequestParam String value){
		return pharmacistRepo.findByEmailStartsWith(value);
	}
}
