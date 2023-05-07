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

	
	public Admin(String email,PersonalDetail personalDetail,String role) {
		super(email,personalDetail,role);
	}
/*	public Admin(String email,PersonalDetail personalDetail,SuperAdmin addedBy){
		super(email,personalDetail,"admin");
		this.addedBy=addedBy;
	}

	public SuperAdmin getAddedBy() {
		return addedBy;
	}

/*	public List<HealthCarePersonnel> getAddedHealthCarePersonnels() {
		return addedHealthCarePersonnels;
	}

	public void setAddedHealthCarePersonnels(List<HealthCarePersonnel> addedHealthCarePersonnels) {
		this.addedHealthCarePersonnels = addedHealthCarePersonnels;
	}*/
}
