package com.eehrs.back_end.db.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;

@Entity
public class Doctor extends User {
	private LocalDate dateEmployed;
	private String speciality,qualification;
	public Doctor() {}
	public Doctor(String fName, String lName,String email,String role,String city,String subcity,String gender,int woreda,String cellPhone1,
			String cellPhone2,LocalDate dob,String speciality,String qualification,String universityName,LocalDate yearOfGraduation,String motheTongue,float CGPA,
			String birthPlace) {
		super(fName,lName,email,role,city,subcity,gender,woreda,cellPhone1,cellPhone2,dob,yearOfGraduation,universityName,birthPlace,motheTongue,CGPA);
		this.speciality=speciality;
		this.qualification=qualification;
	}

	public LocalDate getDateEmployed() {
		return dateEmployed;
	}
	public void setDateEmployed(LocalDate dateEmployed) {
		this.dateEmployed = dateEmployed;
	}
	public String getSpeciality() {
		return this.speciality;
	}
	public void setSpeciality(String speciality) {
		this.speciality=speciality;
	}
	public String getQualification() {
		return this.qualification;
	}
	public void setQualification(String qualification) {
		this.qualification=qualification;
	}








	
}
