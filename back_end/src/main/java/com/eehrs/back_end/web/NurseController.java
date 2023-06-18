package com.eehrs.back_end.web;

import com.eehrs.back_end.db.entity.ActivityLog;
import com.eehrs.back_end.db.entity.Doctor;
import com.eehrs.back_end.db.repository.ActivityLogRepository;
import com.eehrs.back_end.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.eehrs.back_end.db.entity.Nurse;
import com.eehrs.back_end.db.repository.NurseRepository;
import com.eehrs.back_end.email.EmailServiceImpl;

@RestController
public class NurseController {
	@Autowired
	private NurseRepository nurseRepo;
	@Autowired
	private EmailServiceImpl service;
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private ActivityLogRepository activityRepo;
	@PreAuthorize("hasRole('admin')")
	@PostMapping("/add/nurse")
	@ResponseBody
	public void setUser(@RequestBody Nurse nurse) throws Exception {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

		if (!(authentication instanceof AnonymousAuthenticationToken)) {
			String currentUserName = authentication.getName();
			service.temporaryPasswordEmail(nurse.getEmail(),"new password" , nurse.generateSecurePassword());
			nurseRepo.save(nurse);
			activityRepo.save(new ActivityLog(nurse.getPersonalDetail().getfName()+" "
					+nurse.getPersonalDetail().getlName()+" is added to the system",
					"New Nurse Added",userRepo.findByEmail(currentUserName).get()));
		}
	}
	@GetMapping("/search/Nurse/remove")
	@ResponseBody
	public Iterable<Doctor> searchDoctorRemove(@RequestParam String value){
		return nurseRepo.findByEmailStartsWith(value);
	}
	

}
