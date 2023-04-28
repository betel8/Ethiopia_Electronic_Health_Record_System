package com.eehrs.back_end.db.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Pharmacist extends User {
	private LocalDate dateEmployed;
	private String qualification;
	
	public Pharmacist(String fName, String lName,String email,String city,String subcity,String gender,int woreda,
					  String cellPhone1, String cellPhone2,LocalDate dob,String qualification,String universityName,
					  LocalDate yearOfGraduation,String motheTongue,float CGPA, String birthPlace) {
		super(fName,lName,email,"pharmacist",city,subcity,gender,woreda,cellPhone1,cellPhone2,dob,yearOfGraduation,
				universityName,birthPlace,motheTongue,CGPA);
		this.qualification=qualification;
		
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
