package com.eehrs.back_end.web;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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
	public void check() {
		
	}
}
