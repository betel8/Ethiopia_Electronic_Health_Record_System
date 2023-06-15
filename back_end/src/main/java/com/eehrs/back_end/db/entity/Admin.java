package com.eehrs.back_end.db.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Admin extends User {

	/*@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "addedBy",nullable = true)
	private SuperAdmin addedBy;
	/*@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL,mappedBy = "addedBy")
	private List<HealthCarePersonnel> addedHealthCarePersonnels;*/

	public  Admin(){}
	public Admin(String email) {
		super(email,"admin");
	}
	public Admin(String email, String role){
		super(email,role);
	}



/*	public List<HealthCarePersonnel> getAddedHealthCarePersonnels() {
		return addedHealthCarePersonnels;
	}

	public void setAddedHealthCarePersonnels(List<HealthCarePersonnel> addedHealthCarePersonnels) {
		this.addedHealthCarePersonnels = addedHealthCarePersonnels;
	}*/
}
