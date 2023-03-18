package com.eehrs.back_end.db;

import java.time.LocalDate;

import jakarta.persistence.Entity;

@Entity
public class Doctor extends User {
	
	private LocalDate dateEmployed;
	
	public Doctor(String fName, String lName) {
		super(fName, lName);
	}

	public LocalDate getDateEmployed() {
		return dateEmployed;
	}
	public void setDateEmployed(LocalDate dateEmployed) {
		this.dateEmployed = dateEmployed;
	}



	
}
