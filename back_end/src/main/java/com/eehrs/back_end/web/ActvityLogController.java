package com.eehrs.back_end.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.eehrs.back_end.db.entity.ActivityLog;
import com.eehrs.back_end.db.entity.User;
import com.eehrs.back_end.db.repository.ActivityLogRepository;
import com.eehrs.back_end.db.repository.UserRepository;


@RestController
public class ActvityLogController {
	@Autowired
	UserRepository userRepo;
	@Autowired
	ActivityLogRepository activityRepo;
	
	@RequestMapping(value="get/actvitylog")
	public  List<ActivityLog> getActivityLog(@RequestParam String id){
		try {
			User user=userRepo.findById(id).get();
			List<ActivityLog> list=user.getLogs();
			return list;
			
		}catch(Exception e) {
			return null;
		}
	
	}
}


