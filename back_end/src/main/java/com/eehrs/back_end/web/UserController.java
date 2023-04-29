package com.eehrs.back_end.web;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.eehrs.back_end.db.entity.ActivityLog;
import com.eehrs.back_end.db.entity.User;
import com.eehrs.back_end.db.repository.ActivityLogRepository;
import com.eehrs.back_end.db.repository.UserRepository;
import com.eehrs.back_end.db.tem.PasswordChange;


@RestController
public class UserController {
	@Autowired
	UserRepository userRepo;
	@Autowired
	ActivityLogRepository activityRepo;
	@Autowired
	AuthenticationManager authManager;

	@GetMapping(value="/search/user/by/email")
	public  String getUsers(@RequestParam String email){
			return userRepo.findByEmailRetrunEmail(email);
	
	}
	
	@PutMapping("/changepassword")
	@ResponseBody
	public ResponseEntity<?> changePassword(@RequestBody 
			PasswordChange response) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (!(authentication instanceof AnonymousAuthenticationToken)) {
			String currentUserName = authentication.getName();
			Optional<User> users=userRepo.findByEmail(currentUserName);
				if(users!=null) {
					User user =users.get();
					activityRepo.save(new ActivityLog("create account completed ","Account Activated",user));
					activityRepo.save(new ActivityLog("Password has been changed","Password",user));
					user.setPassword(response.getNewPassword());
					return ResponseEntity.ok().build();
				}else {
					return ResponseEntity.badRequest().build();
				}
		}else{
			return ResponseEntity.badRequest().build();
		}
	}
}
