package com.eehrs.back_end.web;

import com.eehrs.back_end.db.tem.ForgetPassword;
import com.eehrs.back_end.email.EmailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.eehrs.back_end.db.entity.User;
import com.eehrs.back_end.db.repository.UserRepository;
import com.eehrs.back_end.db.tem.AccountCredentials;
import com.eehrs.back_end.service.JwtService;

@RestController
public class LoginController {
	@Autowired
	private JwtService jwtService;
	@Autowired
	AuthenticationManager authManager;
	@Autowired
	UserRepository userRepository;
	@Autowired
	private EmailServiceImpl emailService;
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public ResponseEntity<?> getToken(@RequestBody AccountCredentials credentials) {
		Authentication authentication= authManager.authenticate(new UsernamePasswordAuthenticationToken(
				credentials.getUsername(),
				credentials.getPassword()));
		String jwts = jwtService.generateToken(authentication);
		User user=userRepository.findByEmail(credentials.getUsername()).get();

		// Build response with the generated token
		return ResponseEntity.ok()
				.header(HttpHeaders.COOKIE,Long.toString(user.getId()))
				.header(HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS,"Cookie")
				.header(HttpHeaders.AUTHORIZATION, "Bearer "+jwts)
				.header(HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS, "Authorization")
				.build();
	}
	@RequestMapping(value="/forgetPassword",method = RequestMethod.POST)
	public ResponseEntity<?> forgetPassword(@RequestBody ForgetPassword email){
		try{
			User user=userRepository.findByEmail(email.getEmail()).get(); ;
			emailService.passwordChangeEmail(user.getEmail(),"PasswordChange",user.generateSecurePassword());
			return ResponseEntity.ok().build();
		}catch(Exception e){
			return ResponseEntity.badRequest().build();
		}

	}
}
