package com.eehrs.back_end.web;

import com.eehrs.back_end.db.entity.PersonalDetail;
import com.eehrs.back_end.db.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import com.eehrs.back_end.db.entity.ActivityLog;
import com.eehrs.back_end.db.entity.Doctor;
import com.eehrs.back_end.db.repository.ActivityLogRepository;
import com.eehrs.back_end.db.repository.DoctorRepository;
import com.eehrs.back_end.db.repository.UserRepository;
import com.eehrs.back_end.email.EmailServiceImpl;

import java.util.List;

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
			//service.temporaryPasswordEmail(doctor.getEmail(),"new password" , doctor.getPassword());
			activityRepo.save(new ActivityLog(doctor.getPersonalDetail().getfName()+" "
					+doctor.getPersonalDetail().getlName()+" is added to the system",
					"New Doctor Added",userRepo.findByEmail(currentUserName).get()));
		}
	}
	@GetMapping("/search/Doctor/remove")
	@ResponseBody
	public Iterable<Doctor> searchDoctorRemove(@RequestParam String value){
		return doctorRepo.findByEmailStartsWith(value);
	}
	
}
