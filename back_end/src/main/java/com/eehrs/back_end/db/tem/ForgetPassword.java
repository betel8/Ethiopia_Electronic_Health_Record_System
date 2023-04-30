package com.eehrs.back_end.db.tem;

public class ForgetPassword {
    private String email;
    void ForgetPassword(String email){
        this.email=email;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
