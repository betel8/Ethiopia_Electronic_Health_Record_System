package com.eehrs.back_end.db;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	@Column(nullable=false)
	private String fName,lName,password;
	@Column(nullable=false,unique=true)
	private String username;
	private String role;
	public User() {}
	public User(String fName,String lName,String userName,String password,String role){
		this.fName=fName;
		this.lName=lName;
		this.password=password;
		this.username=userName;
		this.role=role;
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
	public String getlName() {
		return lName;
	}
	public void setlname(String lname) {
		lName = lname;
	}
	public void setLogs(List<ActivityLog> logs) {
		this.logs=logs;
	}
	public List<ActivityLog> getLogs() {
		return this.logs;
	}
	public String getUsername() {
		return this.username;
	}
	public void setUsername(String userName) {
		this.username=userName;
	}
	public void setPassword(String password) {
		this.password=password;
	}
	public String getPassword() {
		return this.password;
	}
	public void setRole(String role) {
		this.role=role;
	}
	public String getRole() {
		return this.role;
	}


}
