package com.eehrs.back_end.db.tem;

public class PasswordChange {
	private String newPassword ,confirmNewPassword;
	public PasswordChange(String newPassword,String confirmNewPassword) {
		this.confirmNewPassword=confirmNewPassword;
		this.newPassword=newPassword;
	}

	public String getConfirmNewPassword() {
		return confirmNewPassword;
	}

	public void setConfirmNewPassword(String confirmNewPassword) {
		this.confirmNewPassword = confirmNewPassword;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
}
