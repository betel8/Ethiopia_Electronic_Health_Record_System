package com.eehrs.back_end.db.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Doctor extends HealthCarePersonnel {
	@JsonIgnore
	@OneToMany(cascade=CascadeType.ALL, mappedBy="byDoctor")
	private List<Prescription> prescriptions=new ArrayList<Prescription>();
	@JsonIgnore
	@OneToMany(cascade=CascadeType.ALL, mappedBy="diagnosisBy")
	private List<Diagnosis> diagnosisList=new ArrayList<Diagnosis>();
	public Doctor(){}
	public Doctor(String email,PersonalDetail personalDetail) {
		super(email, personalDetail,"doctor");
	}

}
