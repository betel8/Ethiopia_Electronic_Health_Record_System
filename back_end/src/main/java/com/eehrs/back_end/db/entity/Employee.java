package com.eehrs.back_end.db.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;

@Entity
public class Employee extends User {
	public Employee(String fName, String lName,String email,String role,String city,String subcity,String gender,int woreda,String cellPhone1,
			String cellPhone2,LocalDate dob,String speciality,String qualification,String universityName,LocalDate yearOfGraduation,String motheTongue,float CGPA,
			String birthPlace) {
		super(fName,lName,email,role,city,subcity,gender,woreda,cellPhone1,cellPhone2,dob,yearOfGraduation,universityName,birthPlace,motheTongue,CGPA);
	}
	
}
