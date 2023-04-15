package com.eehrs.back_end.web;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.eehrs.back_end.db.ActivityLog;
import com.eehrs.back_end.db.ActivityLogRepository;
import com.eehrs.back_end.db.UserRepository;

@RestController
public class ActvityLogController {
	@Autowired
	UserRepository userRepo;
	@Autowired
	ActivityLogRepository activityRepo;
	@GetMapping("/get/activitylog")
	@ResponseBody
	public Optional<ActivityLog> getActivityLog(@RequestBody String email){
		Long id=userRepo.findByEmailReturnId(email);
		return activityRepo.findById(id);
	}
}
