package com.eehrs.back_end.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class HealthCarePersonnel extends User {

    @OneToMany(cascade=CascadeType.ALL, mappedBy="addedBy")
    @JsonIgnore
    private List<Patient> addedPatient=new ArrayList<Patient>();
    /*@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "addedBy",nullable = true)
    private Admin addedBy;*/
    public HealthCarePersonnel(){}
    public HealthCarePersonnel(String email,PersonalDetail personalDetail,String role){
        super(email,role);
    }


    public List<Patient> getAddedPatient() {
        return addedPatient;
    }

    public void setAddedPatient(List<Patient> addedPatient) {
        this.addedPatient = addedPatient;
    }
}
