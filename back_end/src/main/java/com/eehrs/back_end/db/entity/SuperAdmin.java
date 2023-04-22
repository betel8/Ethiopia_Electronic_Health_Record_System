package com.eehrs.back_end.db.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class SuperAdmin extends User {
	private LocalDate dateEmployed;
	private String qualification;
	
	public SuperAdmin(String fName, String lName,String email,String city,String subcity,String gender,int woreda,String cellPhone1,
			String cellPhone2,LocalDate dob,LocalDate yearOfGraduation,String universityName,String birthPlace,String motheTongue,
			float CGPA,String qualification,LocalDate dateEmployed) {
		super(fName,lName,email,"superAdmin",city,subcity,gender,woreda,cellPhone1,cellPhone2,dob,yearOfGraduation,universityName,
				birthPlace,motheTongue,CGPA);
		this.setQualification(qualification);
		this.setDateEmployed(dateEmployed);
		
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public LocalDate getDateEmployed() {
		return dateEmployed;
	}

	public void setDateEmployed(LocalDate dateEmployed) {
		this.dateEmployed = dateEmployed;
	}
}
