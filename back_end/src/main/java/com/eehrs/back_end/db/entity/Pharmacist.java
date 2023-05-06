package com.eehrs.back_end.db.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Pharmacist extends User {

	
	public Pharmacist(String email,PersonalDetail personalDetail) {
		super(email, personalDetail);
		
	}
}
