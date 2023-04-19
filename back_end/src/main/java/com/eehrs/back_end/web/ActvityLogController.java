package com.eehrs.back_end.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.eehrs.back_end.db.ActivityLog;
import com.eehrs.back_end.db.ActivityLogRepository;
import com.eehrs.back_end.db.User;
import com.eehrs.back_end.db.UserRepository;


@RestController
public class ActvityLogController {
	@Autowired
	UserRepository userRepo;
	@Autowired
	ActivityLogRepository activityRepo;
	
	@RequestMapping(value="get/actvitylog")
	public  Iterable<ActivityLog> getActivityLog(@RequestParam String id){
		User user=userRepo.findById(id).get();
		List<ActivityLog> list=user.getLogs();
		System.out.print(list.get(0).getDescription());
		return list;
	}
}


