package com.eehrs.back_end.db.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Admin extends User {

	@Column(nullable = true	)
	private LocalDate DateOfEmployment=LocalDate.now();
	@JsonIgnore
	@OneToMany(cascade=CascadeType.ALL, mappedBy="answeredBy")
	private List<TechnicalSupport> technicalSupports;

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

	public List<TechnicalSupport> getTechnicalSupports() {
		return technicalSupports;
	}

	public void setTechnicalSupports(List<TechnicalSupport> technicalSupports) {
		this.technicalSupports = technicalSupports;
	}



/*	public List<HealthCarePersonnel> getAddedHealthCarePersonnels() {
		return addedHealthCarePersonnels;
	}

	public void setAddedHealthCarePersonnels(List<HealthCarePersonnel> addedHealthCarePersonnels) {
		this.addedHealthCarePersonnels = addedHealthCarePersonnels;
	}*/
}
