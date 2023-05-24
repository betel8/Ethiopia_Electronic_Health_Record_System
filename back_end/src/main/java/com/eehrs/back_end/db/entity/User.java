package com.eehrs.back_end.db.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import org.passay.CharacterRule;
import org.passay.EnglishCharacterData;
import org.passay.PasswordGenerator;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User  {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long ID;

	@Column(nullable=false)
	private String password,role;

	@Column(nullable=false,unique=true)
	private String email;

	@JsonIgnore
	@OneToMany(cascade=CascadeType.ALL, mappedBy="user")
	private List<ActivityLog> logs=new ArrayList<ActivityLog>();

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL )
	@PrimaryKeyJoinColumn
	private PersonalDetail personalDetail;

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL )
	@PrimaryKeyJoinColumn
	private AcademicDetail	academicDetail;



	public User() {
		generateSecurePassword();
	}

	public User(String email,String role){

		BCryptPasswordEncoder bCrypt=new BCryptPasswordEncoder();
		CharSequence passwordValue="admin4118";
		this.password=bCrypt.encode(passwordValue);
		this.email=email;
		this.role=role;
	}

	public Long getID() {
		return ID;
	}

	public void generateSecurePassword() {
        
        // create character rule for lower case  
        CharacterRule LCR = new CharacterRule(EnglishCharacterData.LowerCase);  
        // set number of lower case characters  
        LCR.setNumberOfCharacters(2);  
  
        // create character rule for upper case  
        CharacterRule UCR = new CharacterRule(EnglishCharacterData.UpperCase);  
        // set number of upper case characters  
        UCR.setNumberOfCharacters(2);  
  
        // create character rule for digit  
        CharacterRule DR = new CharacterRule(EnglishCharacterData.Digit);  
        // set number of digits  
        DR.setNumberOfCharacters(2);  
  
        // create character rule for lower case  
        CharacterRule SR = new CharacterRule(EnglishCharacterData.Special);  
        // set number of special characters  
        SR.setNumberOfCharacters(2);  
          
        // create instance of the PasswordGenerator class   
        PasswordGenerator passGen = new PasswordGenerator();  
          
        // call generatePassword() method of PasswordGenerator class to get Passay generated password  
        String password = passGen.generatePassword(8, SR, LCR, UCR, DR);  
          
        // return Passay generated password to the main() method
        BCryptPasswordEncoder bCrypt=new BCryptPasswordEncoder();
        this.password=bCrypt.encode((CharSequence)password );
    }



	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		BCryptPasswordEncoder bCrypt=new BCryptPasswordEncoder();
		CharSequence passwordValue=password;
		this.password = bCrypt.encode(passwordValue);
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {this.email = email;}

	public List<ActivityLog> getLogs() {
		return logs;
	}

	public void setLogs(List<ActivityLog> logs) {
		this.logs = logs;
	}

	public PersonalDetail getPersonalDetail() {
		return personalDetail;
	}

	public void setPersonalDetail(PersonalDetail personalDetail) {
		personalDetail.setUser(this);
		this.personalDetail = personalDetail;
	}

	public AcademicDetail getAcademicDetail() {
		return academicDetail;
	}

	public void setAcademicDetail(AcademicDetail academicDetail) {
		academicDetail.setUser(this);
		this.academicDetail = academicDetail;
	}
}
