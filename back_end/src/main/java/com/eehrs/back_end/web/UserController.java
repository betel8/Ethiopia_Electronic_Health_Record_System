package com.eehrs.back_end.web;



import java.util.Collections;
import java.util.Optional;

import com.eehrs.back_end.db.entity.*;
import com.eehrs.back_end.db.repository.AcademicDetailRepository;
import com.eehrs.back_end.db.repository.PersonalDetailRepository;
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

import com.eehrs.back_end.db.repository.ActivityLogRepository;
import com.eehrs.back_end.db.repository.UserRepository;
import com.eehrs.back_end.db.tem.PasswordChange;


@RestController
public class UserController {
	@Autowired
	UserRepository userRepo;
	@Autowired
	PersonalDetailRepository personalDetailRepository;
	@Autowired
	ActivityLogRepository activityRepo;
	@Autowired
	AuthenticationManager authManager;
	@Autowired
	PasswordEncoder passwordEncoder;
	@Autowired
	AcademicDetailRepository academicDetailRepository;

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
			try{
				if(passwordEncoder.matches(passwordChange.getOldPassword(), user.getPassword())){
					user.setPassword(passwordChange.getNewPassword());
					userRepo.save(user);
					activityRepo.save(new ActivityLog("Password has been changed","Password",user));
					return ResponseEntity.ok().build();
				}else{
					return ResponseEntity.badRequest().build();
				}
			}catch (Exception e){
				return ResponseEntity.badRequest().build();
			}


		}else {
			return ResponseEntity.badRequest().build();
		}

	}
	@GetMapping("/get/personalDetail")
	@ResponseBody
	PersonalDetail getPersonalDetail(){
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (!(authentication instanceof AnonymousAuthenticationToken)) {
			String currentUsername=authentication.getName();
			User user=userRepo.findByEmail(currentUsername).get();
			return user.getPersonalDetail();
		}else {
			return null;
		}

	}
	@PutMapping("/put/user")
	@ResponseBody
	public void putUser(@RequestBody User userUpdate) throws Exception {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

		if (!(authentication instanceof AnonymousAuthenticationToken)) {
			String currentUserName = authentication.getName();
			userRepo.findByEmail(currentUserName).map(user -> {
				//user data update
				user.setRole(userUpdate.getRole());
				user.setEmail(userUpdate.getEmail());
				//personal detail update
				personalDetailRepository.findPDById(user.getID()).map(personalDetail -> {
					personalDetail.setfName(userUpdate.getPersonalDetail().getfName());
					personalDetail.setlName(userUpdate.getPersonalDetail().getlName());
					personalDetail.setCity(userUpdate.getPersonalDetail().getCity());
					personalDetail.setSubCity(userUpdate.getPersonalDetail().getSubCity());
					personalDetail.setCellPhone1(userUpdate.getPersonalDetail().getCellPhone1());
					personalDetail.setCellPhone2(userUpdate.getPersonalDetail().getCellPhone2());
					personalDetail.setMotherTongue(userUpdate.getPersonalDetail().getMotherTongue());
					personalDetail.setWoreda(userUpdate.getPersonalDetail().getWoreda());
					personalDetail.setDob(userUpdate.getPersonalDetail().getDob());
					personalDetail.setBirthPlace(userUpdate.getPersonalDetail().getBirthPlace());
					personalDetail.setGender(userUpdate.getPersonalDetail().getGender());
					return personalDetailRepository.save(personalDetail);
				});
				//academic detail update
					academicDetailRepository.findADById(user.getID()).map(academicDetail -> {
						academicDetail.setCgpa(userUpdate.getAcademicDetail().getCgpa());
						academicDetail.setQualification(userUpdate.getAcademicDetail().getQualification());
						academicDetail.setUniversityName(userUpdate.getAcademicDetail().getUniversityName());
						academicDetail.setYearOfGraduation(userUpdate.getAcademicDetail().getYearOfGraduation());
						return academicDetailRepository.save(academicDetail);
					});


				return userRepo.save(user);
			});
			activityRepo.save(new ActivityLog(userUpdate.getPersonalDetail().getfName()+" "
					+userUpdate.getPersonalDetail().getlName()+" detail has been updated",
					"Update Personal Detail ",userRepo.findByEmail(currentUserName).get()));
		}
	}
	@PutMapping("/suspend/user")
	@ResponseBody
	public void suspend(@RequestParam String email){
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

		if (!(authentication instanceof AnonymousAuthenticationToken)) {
			String currentUserName = authentication.getName();
			User suspendedUser=userRepo.findByEmail(email).get();
			suspendedUser.setEnabled(false);
			activityRepo.save(new ActivityLog(suspendedUser.getPersonalDetail().getfName()+" "
					+suspendedUser.getPersonalDetail().getlName()+" has been suspend",
					"Suspend a User ",userRepo.findByEmail(currentUserName).get()));
			userRepo.save(suspendedUser);
		}

	}
	@PutMapping("/user/logout")
	@ResponseBody
	public void logout(){

			Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

			if (!(authentication instanceof AnonymousAuthenticationToken)) {
				String currentUserName = authentication.getName();
				User user=userRepo.findByEmail(currentUserName).get();
				user.setStatus(false);
				activityRepo.save(new ActivityLog(user.getPersonalDetail().getfName()+" "
						+user.getPersonalDetail().getlName()+" you logged out",
						"Log out ",userRepo.findByEmail(currentUserName).get()));
				userRepo.save(user);
			}

	}
	@GetMapping("/search/user")
	@ResponseBody
	public Iterable<User> searchUser(@RequestParam String value){
		return userRepo.findByEmailStartsWith(value);
	}
	@GetMapping("/get/by/email")
	@ResponseBody
	public User getUserByEmail(@RequestParam String email){
		return userRepo.findByEmail(email).get();
	}
}
