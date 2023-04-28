package com.eehrs.back_end.db.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import net.minidev.json.annotate.JsonIgnore;
import org.springframework.data.annotation.CreatedBy;

@Entity
public class SuperAdmin extends Admin {

	public SuperAdmin(String fName, String lName,String email,String city,String subcity,String gender,int woreda,String cellPhone1,
			String cellPhone2,LocalDate dob,LocalDate yearOfGraduation,String universityName,String birthPlace,String motheTongue,
			float CGPA,String qualification,LocalDate dateEmployed) {
		super(fName,lName,email,city,subcity,gender,woreda,cellPhone1,cellPhone2,dob,yearOfGraduation,universityName,
				birthPlace,motheTongue,CGPA,qualification,dateEmployed);
	}

}
