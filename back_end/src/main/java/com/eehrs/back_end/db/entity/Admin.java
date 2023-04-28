package com.eehrs.back_end.db.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import net.minidev.json.annotate.JsonIgnore;

@Entity
public class Admin extends User {
	private LocalDate dateEmployed;
	private String qualification;


	
	public Admin(String fName, String lName,String email,String city,String subcity,String gender,int woreda,String cellPhone1,
			String cellPhone2,LocalDate dob,LocalDate yearOfGraduation,String universityName,String birthPlace,String motheTongue,
			float CGPA,String qualification,LocalDate dateEmployed) {
		super(fName,lName,email,"admin",city,subcity,gender,woreda,cellPhone1,cellPhone2,dob,yearOfGraduation,universityName,
				birthPlace,motheTongue,CGPA);
		this.qualification=qualification;
		this.dateEmployed=dateEmployed;
		
	}

	public LocalDate getDateEmployed() {
		return dateEmployed;
	}

	public void setDateEmployed(LocalDate dateEmployed) {
		this.dateEmployed = dateEmployed;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	
}
