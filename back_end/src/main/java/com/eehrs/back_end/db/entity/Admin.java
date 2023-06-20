package com.eehrs.back_end.db.entity;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
public class Admin extends User {

	@Column(nullable = true	)
	private LocalDate DateOfEmployment=LocalDate.now();

	public  Admin(){}
	public Admin(String email) {
		super(email,"admin");
	}
	public Admin(String email, String role){
		super(email,role);
	}

	public LocalDate getDateOfEmployment() {
		return DateOfEmployment;
	}

	public void setDateOfEmployment(LocalDate dateOfEmployment) {
		DateOfEmployment = dateOfEmployment;
	}



/*	public List<HealthCarePersonnel> getAddedHealthCarePersonnels() {
		return addedHealthCarePersonnels;
	}

	public void setAddedHealthCarePersonnels(List<HealthCarePersonnel> addedHealthCarePersonnels) {
		this.addedHealthCarePersonnels = addedHealthCarePersonnels;
	}*/
}
