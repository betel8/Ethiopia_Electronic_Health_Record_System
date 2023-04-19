package com.eehrs.back_end.web;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.eehrs.back_end.db.User;
import com.eehrs.back_end.db.UserRepository;


@RestController
public class UserController {
	@Autowired
	UserRepository userRepo;


	@GetMapping(value="/search/user/by/email")
	public  String getUsers(@RequestParam String email){
			return userRepo.findByEmailRetrunEmail(email);
	
	}
	
	@PutMapping("/changepassword")
	@ResponseBody
	public ResponseEntity<?> changePassword(@RequestBody 
			String newPassword, String email, String oldPassword) {
			Optional<User> users=userRepo.findByEmail(email);
			if(users!=null) {
				User user =users.get();
				if(user.getPassword()==oldPassword) {
					user.setPassword(newPassword);
					return ResponseEntity.ok().build();
				}else {
					return ResponseEntity.badRequest().build();
				}
				
			}else {
				return ResponseEntity.badRequest().build();
			}
		
		
	}
}
