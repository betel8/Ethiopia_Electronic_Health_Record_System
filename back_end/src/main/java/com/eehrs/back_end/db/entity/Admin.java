package com.eehrs.back_end.db.entity;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
public class Admin extends User {



	public  Admin(){}
	public Admin(String email) {
		super(email,"admin");
	}
	public Admin(String email, String role){
		super(email,role);
		;
	}




/*	public List<HealthCarePersonnel> getAddedHealthCarePersonnels() {
		return addedHealthCarePersonnels;
	}

	public void setAddedHealthCarePersonnels(List<HealthCarePersonnel> addedHealthCarePersonnels) {
		this.addedHealthCarePersonnels = addedHealthCarePersonnels;
	}*/
}
