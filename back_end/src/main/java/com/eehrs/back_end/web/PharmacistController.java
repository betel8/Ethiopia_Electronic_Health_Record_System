package com.eehrs.back_end.web;

import com.eehrs.back_end.db.entity.ActivityLog;
import com.eehrs.back_end.db.entity.Admin;
import com.eehrs.back_end.db.entity.Doctor;
import com.eehrs.back_end.db.repository.ActivityLogRepository;
import com.eehrs.back_end.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
	private ActivityLogRepository activityLogRepository;
	@Autowired
	private EmailServiceImpl service;
	@Autowired
	private UserRepository userRepository;
	@PostMapping("/add/pharmacist")
	@ResponseBody
	public void addAdmin(@RequestBody Pharmacist pharmacist){
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

		if (!(authentication instanceof AnonymousAuthenticationToken)) {
			String currentUserName = authentication.getName();
			service.temporaryPasswordEmail(pharmacist.getEmail(),"new password" ,pharmacist.generateSecurePassword());
			pharmacistRepo.save(pharmacist);
			activityLogRepository.save(new ActivityLog(pharmacist.getPersonalDetail().getfName()+" "
					+pharmacist.getPersonalDetail().getlName()+" is added to the system",
					"New Pharmacist Added",userRepository.findByEmail(currentUserName).get()));
		}
	}
	@GetMapping("/search/Pharmacist/remove")
	@ResponseBody
	public Iterable<Doctor> searchDoctorRemove(@RequestParam String value){
		return pharmacistRepo.findByEmailStartsWith(value);
	}
}
