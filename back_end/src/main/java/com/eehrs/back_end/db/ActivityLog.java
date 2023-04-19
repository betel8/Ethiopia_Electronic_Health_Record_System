package com.eehrs.back_end.db;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class ActivityLog {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long activityNo;
	private String description,subject;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user", nullable=false )
	private User user;
	
	public ActivityLog() {}
	public ActivityLog(String description ,String subject,User user) {
		super();
		this.description=description;
		this.subject=subject;
		this.user=user;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public void setUser(User user) {
		this.user=user;
	}
	public User getUser() {
		return this.user;
	}
	
}
