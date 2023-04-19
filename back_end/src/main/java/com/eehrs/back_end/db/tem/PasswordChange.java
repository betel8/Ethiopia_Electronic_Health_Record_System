package com.eehrs.back_end.db.tem;

public class PasswordChange {
	private long ID;
	private String password;
	public PasswordChange(long ID,String password) {
		this.ID=ID;
		this.password=password;
	}
	public long getID() {
		return ID;
	}
	public void setId(long ID) {
		this.ID = ID;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
