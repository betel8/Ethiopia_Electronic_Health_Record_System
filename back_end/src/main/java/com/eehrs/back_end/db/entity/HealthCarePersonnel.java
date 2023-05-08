package com.eehrs.back_end.db.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class HealthCarePersonnel extends User {
    /*@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "addedBy",nullable = true)
    private Admin addedBy;*/
    public HealthCarePersonnel(){}
    public HealthCarePersonnel(String email,PersonalDetail personalDetail,String role){
        super(email,role);
    }

}
