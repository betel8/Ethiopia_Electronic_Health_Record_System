package com.eehrs.back_end.db.tem;

public class PasswordChange {
	private String newPassword ,confirmNewPassword,oldPassword;
	public PasswordChange(){}
	public PasswordChange(String newPassword, String confirmNewPassword, String oldPassword) {
		this.confirmNewPassword=confirmNewPassword;
		this.newPassword=newPassword;
		this.oldPassword = oldPassword;
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

	public String getOldPassword() {
		return oldPassword;
	}

	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}
}
