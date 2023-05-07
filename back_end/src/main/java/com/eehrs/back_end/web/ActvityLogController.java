package com.eehrs.back_end.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
	public  List<ActivityLog> getActivityLog(){
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

		if (!(authentication instanceof AnonymousAuthenticationToken)) {
			String currentUserName = authentication.getName();

			try{
				User user=userRepo.findByEmail(currentUserName).get();
				return user.getLogs();
			}catch(Exception e){
				return null;
			}


		}else {
			return null;
		}

	}
}


