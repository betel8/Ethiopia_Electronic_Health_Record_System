package com.eehrs.back_end.db;

import java.time.LocalDate;
import java.util.List;

import org.passay.CharacterRule;
import org.passay.EnglishCharacterData;
import org.passay.PasswordGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.eehrs.back_end.email.EmailServiceImpl;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Transient;

@Entity
public class User  {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	@Column(nullable=false)
	private String fName,lName,password,role,city,subcity,gender,cellPhone1,universityName,birthPlace,motheTongue;
	@Column(nullable=false)
	private int woreda;
	@Column(nullable=false)
	private LocalDate dob,yearOfGraduation;
	@Column(nullable=false,unique=true)
	private String email;
	
	private String cellPhone2;
	@Column(nullable=false)
	private float CGPA;

	

	
	
	public User() {}
	public User(String fName,String lName,String email,String role,String city,String subcity,String gender,int woreda,String cellPhone1,
			String cellPhone2,LocalDate dob,LocalDate yearOfGraduation,String universityName,String birthPlace,String motheTongue,float CGPA){
		this.fName=fName;
		this.lName=lName;
		BCryptPasswordEncoder bCrypt=new BCryptPasswordEncoder();
		CharSequence passwordValue=generateSecurePassword();
		System.out.print(passwordValue);
		this.password=bCrypt.encode(passwordValue);
		this.email=email;
		this.role=role;
		this.city=city;
		this.subcity=subcity;
		this.gender=gender;
		this.woreda=woreda;
		this.cellPhone1=cellPhone1;
		this.dob=dob;
		this.cellPhone2=cellPhone2;
		this.yearOfGraduation=yearOfGraduation;
		this.universityName=universityName;
		this.birthPlace=birthPlace;
		this.motheTongue=motheTongue;
		this.CGPA=CGPA;
	}
	@OneToMany(cascade=CascadeType.ALL, mappedBy="user")
	private List<ActivityLog> logs;
	
	public long getid() {
		return this.id;
	}
	public String getBirthPlace() {
		return birthPlace;
	}

	public void setBirthPlace(String birthPlace) {
		this.birthPlace = birthPlace;
	}
	public String getUniversityName() {
		return universityName;
	}

	public void setUniversityName(String universityName) {
		this.universityName = universityName;
	}
	public LocalDate getYearOfGraduation() {
		return yearOfGraduation;
	}

	public void setYearOfGraduation(LocalDate yearOfGraduaion) {
		this.yearOfGraduation = yearOfGraduaion;
	}
	public String getfName() {
		return fName;
	}
	public void setfName(String fName) {
		this.fName = fName;
	}
	public String getlName() {
		return lName;
	}
	public void setlname(String lname) {
		lName = lname;
	}
	public void setLogs(List<ActivityLog> logs) {
		this.logs=logs;
	}
	public List<ActivityLog> getLogs() {
		return this.logs;
	}
	public String getEmail() {
		return this.email;
	}
	public void setEmail(String userName) {
		this.email=userName;
	}
	public void setPassword(String password) {
		this.password=password;
	}
	public String getPassword() {
		return this.password;
	}
	public void setMotheTongue(String motheTongue) {
		this.motheTongue=motheTongue;
	}
	public String getMotherTongue() {
		return this.motheTongue;
	}
	public void setRole(String role) {
		this.role=role;
	}
	public String getRole() {
		return this.role;
	}
	public String getCellPhone2() {
		return cellPhone2;
	}
	public void setCellPhone2(String cellPhone2) {
		this.cellPhone2 = cellPhone2;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getSubcity() {
		return subcity;
	}
	public void setSubcity(String subcity) {
		this.subcity = subcity;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getWoreda() {
		return woreda;
	}
	public void setWoreda(int woreda) {
		this.woreda = woreda;
	}
	public String getCellPhone1() {
		return cellPhone1;
	}
	public void setCellPhone1(String cellPhone1) {
		this.cellPhone1 = cellPhone1;
	}
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public float getCGPA() {
		return this.CGPA;
	}

	public void setCGPA(float CGPA) {
		this.CGPA = CGPA;
	}
    public static String generateSecurePassword() {  
        
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
        return password;  
    }  


}
