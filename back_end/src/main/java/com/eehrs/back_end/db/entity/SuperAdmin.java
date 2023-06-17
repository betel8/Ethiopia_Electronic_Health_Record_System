package com.eehrs.back_end.db.entity;

import jakarta.persistence.Entity;

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
