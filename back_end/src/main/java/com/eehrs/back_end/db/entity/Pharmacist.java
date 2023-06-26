package com.eehrs.back_end.db.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Pharmacist extends HealthCarePersonnel {
	/*
	@JsonIgnore
	@OneToMany(cascade=CascadeType.ALL, mappedBy="acceptedBy")
	private List<Prescription> AcceptedPrescriptions=new ArrayList<Prescription>();*/
	public Pharmacist(){}
	public Pharmacist(String email,PersonalDetail personalDetail) {
		super(email, personalDetail,"pharmacist");
		
	}
/*
	public List<Prescription> getAcceptedPrescriptions() {
		return AcceptedPrescriptions;
	}

	public void setAcceptedPrescriptions(List<Prescription> acceptedPrescriptions) {
		AcceptedPrescriptions = acceptedPrescriptions;
	}*/
}
