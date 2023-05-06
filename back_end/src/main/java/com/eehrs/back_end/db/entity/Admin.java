package com.eehrs.back_end.db.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import net.minidev.json.annotate.JsonIgnore;

@Entity
public class Admin extends User {



	
	public Admin(String email,PersonalDetail personalDetail) {
		super(email,personalDetail);
	}


}
