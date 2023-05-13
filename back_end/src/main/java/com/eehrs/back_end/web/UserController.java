package com.eehrs.back_end.web;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
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
	@Autowired
	PasswordEncoder passwordEncoder;

	@GetMapping(value="/get/user")
	public  Optional<User> getUsers(){
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (!(authentication instanceof AnonymousAuthenticationToken)) {
			String currentUserName = authentication.getName();
			return userRepo.findByEmail(currentUserName);
		}else{
			return null;
		}
	}
	
	@PutMapping("/first/time/change/password")
	@ResponseBody
	public ResponseEntity<?> FirstTimeChangePassword(@RequestBody
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
					userRepo.save(user);
					return ResponseEntity.ok().build();
				}else {
					return ResponseEntity.badRequest().build();
				}
		}else{
			return ResponseEntity.badRequest().build();
		}
	}
	@GetMapping("/check/user")
	@ResponseBody
	public String checkUser(@RequestParam String email){
		try{
			userRepo.findByEmail(email).get();
			return "found";
		}catch (Exception e){
			return null;
		}

	}
	@PutMapping("/change/password")
	@ResponseBody
	ResponseEntity<?> changePassword(@RequestBody PasswordChange passwordChange){
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (!(authentication instanceof AnonymousAuthenticationToken)) {
			String currentUserName = authentication.getName();
			Optional<User> optionalUser=userRepo.findByEmail(currentUserName);
			User user=optionalUser.get();
			System.out.println(passwordChange.getOldPassword()+passwordChange.getNewPassword()+passwordChange.getConfirmNewPassword());
			try{
				if(passwordEncoder.matches(passwordChange.getOldPassword(), user.getPassword())){
					user.setPassword(passwordChange.getNewPassword());
					userRepo.save(user);
					return ResponseEntity.ok().build();
				}else{
					System.out.println("failed1");
					return ResponseEntity.badRequest().build();
				}
			}catch (Exception e){
				System.out.println("failed2");
				return ResponseEntity.badRequest().build();
			}


		}else {
			return ResponseEntity.badRequest().build();
		}

	}
}
