package com.eehrs.back_end.db;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String fName,Lname;
	
	
	public User(String fName,String lName){
		this.fName=fName;
		this.Lname=lName;
	}
	@OneToMany(cascade=CascadeType.ALL, mappedBy="user")
	private List<ActivityLog> logs;
	
	public long getid() {
		return this.id;
	}
	public String getfName() {
		return fName;
	}
	public void setfName(String fName) {
		this.fName = fName;
	}
	public String getLname() {
		return Lname;
	}
	public void setLname(String lname) {
		Lname = lname;
	}
	public void setLogs(List<ActivityLog> logs) {
		this.logs=logs;
	}
	public List<ActivityLog> getLogs() {
		return this.logs;
	}

}
