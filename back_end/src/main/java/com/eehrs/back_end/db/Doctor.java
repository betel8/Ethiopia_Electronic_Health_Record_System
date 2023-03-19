package com.eehrs.back_end.db;

import java.time.LocalDate;

import javax.persistence.Entity;

@Entity
public class Doctor extends User {
	
	private LocalDate dateEmployed;
	public Doctor() {}
	public Doctor(String fName, String lName,String userName,String password,String role) {
		super(fName, lName,userName,password,role);
	}

	public LocalDate getDateEmployed() {
		return dateEmployed;
	}
	public void setDateEmployed(LocalDate dateEmployed) {
		this.dateEmployed = dateEmployed;
	}



	
}
