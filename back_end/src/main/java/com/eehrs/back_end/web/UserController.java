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

import com.eehrs.back_end.db.entity.User;
import com.eehrs.back_end.db.repository.UserRepository;


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
			passwordChange response) {
			Optional<User> users=userRepo.findById(response.getID());
			
				if(users!=null) {
					User user =users.get();
					user.setPassword(response.getPassword());
					return ResponseEntity.ok().build();
				}else {
					return ResponseEntity.badRequest().build();
				}
				
		
		
	}
}
class passwordChange{
	private long ID;
	private String password;
	public passwordChange(long ID,String password) {
		this.ID=ID;
		this.password=password;
	}
	public long getID() {
		return ID;
	}
	public void setId(long ID) {
		this.ID = ID;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
