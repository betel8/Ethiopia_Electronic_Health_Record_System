package com.eehrs.back_end.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.eehrs.back_end.db.entity.ActivityLog;
import com.eehrs.back_end.db.entity.Doctor;
import com.eehrs.back_end.db.repository.ActivityLogRepository;
import com.eehrs.back_end.db.repository.DoctorRepository;
import com.eehrs.back_end.db.repository.UserRepository;
import com.eehrs.back_end.email.EmailServiceImpl;

@RestController
public class DoctorController {
	@Autowired
	private DoctorRepository doctorRepo;
	@Autowired
	private EmailServiceImpl service;
	@Autowired
	private ActivityLogRepository activityRepo;
	@Autowired
	private UserRepository userRepo;
	
	@PostMapping("/add/doctor")
	@ResponseBody
	public void setUser(@RequestBody Doctor doctor) throws Exception {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		
		if (!(authentication instanceof AnonymousAuthenticationToken)) {
		    String currentUserName = authentication.getName();
			doctorRepo.save(doctor);
			String temPassword=doctor.generateSecurePassword();
			service.temporaryPasswordEmail(doctor.getEmail(),"new password" , temPassword);
			activityRepo.save(new ActivityLog(doctor.getFName()+" " +doctor.getLName()+" is added to the system",
					"New Doctor Added",userRepo.findByEmail(currentUserName).get()));
		}
		
	}
	
}
