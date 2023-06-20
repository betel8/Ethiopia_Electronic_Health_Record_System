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

    @OneToMany(cascade=CascadeType.ALL, mappedBy="fromUser")
    @JsonIgnore
    private List<TechnicalSupport> myMessage=new ArrayList<TechnicalSupport>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "works", nullable=true)
    private HCP works;

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

    public HCP getWorks() {
        return works;
    }

    public void setWorks(HCP works) {
        this.works = works;
    }
}
