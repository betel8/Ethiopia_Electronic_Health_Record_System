package com.eehrs.back_end.db.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import org.springframework.data.annotation.CreatedBy;

@Entity
public class SuperAdmin extends Admin {
	/*@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL,mappedBy = "addedBy")
	private List<Admin> addedAdmins;*/

	public SuperAdmin(String email) {
		super(email,"superAdmin");
	}

	/*public List<Admin> getAddedAdmins() {
		return addedAdmins;
	}

	public void setAddedAdmins(List<Admin> addedAdmins) {
		this.addedAdmins = addedAdmins;
	}*/
}
