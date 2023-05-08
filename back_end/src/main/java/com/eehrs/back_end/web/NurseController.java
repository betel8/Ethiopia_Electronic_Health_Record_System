package com.eehrs.back_end.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.eehrs.back_end.db.entity.Nurse;
import com.eehrs.back_end.db.repository.NurseRepository;
import com.eehrs.back_end.email.EmailServiceImpl;

@RestController
public class NurseController {
	@Autowired
	private NurseRepository nurseRepo;
	@Autowired
	private EmailServiceImpl service;
	@PreAuthorize("hasRole('admin')")
	@PostMapping("/add/nurse")
	@ResponseBody
	public void setUser(@RequestBody Nurse nurse) throws Exception {
		String temPassword=nurse.getPassword();
		service.temporaryPasswordEmail(nurse.getEmail(),"new password" , temPassword);
		nurseRepo.save(nurse);
	}
	

}
