package com.eehrs.back_end.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Diagnosis {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long ID;


    @Column(nullable = false)
    private String accessType,Diagnosis,test;

    @Column
    private LocalDate dateAdmitted,dateDischarge;

    @JsonIgnore
    @OneToMany(cascade=CascadeType.ALL, mappedBy="diagnosis")
    private List<Prescription> prescriptions=new ArrayList<Prescription>();
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "diagnosisBy" )
    private Doctor diagnosisBy;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ofPatient", nullable=false )
    private Patient ofPatient;

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public String getAccessType() {
        return accessType;
    }

    public void setAccessType(String accessType) {
        this.accessType = accessType;
    }

    public LocalDate getDateAdmitted() {
        return dateAdmitted;
    }

    public void setDateAdmitted(LocalDate dateAdmitted) {
        this.dateAdmitted = dateAdmitted;
    }

    public String getDiagnosis() {
        return Diagnosis;
    }

    public void setDiagnosis(String diagnosis) {
        Diagnosis = diagnosis;
    }

    public LocalDate getDateDischarge() {
        return dateDischarge;
    }

    public void setDateDischarge(LocalDate dateDischarge) {
        this.dateDischarge = dateDischarge;
    }

    public String getTest() {
        return test;
    }

    public void setTest(String test) {
        this.test = test;
    }


    public List<Prescription> getPrescriptions() {
        return prescriptions;
    }

    public void setPrescriptions(List<Prescription> prescriptions) {
        this.prescriptions = prescriptions;
    }

    public com.eehrs.back_end.db.entity.Doctor getDiagnosisBy() {
        return diagnosisBy;
    }

    public void setDiagnosisBy(com.eehrs.back_end.db.entity.Doctor diagnosisBy) {
        this.diagnosisBy = diagnosisBy;
    }


    public Patient getOfPatient() {
        return ofPatient;
    }

    public void setOfPatient(Patient ofPatient) {
        this.ofPatient = ofPatient;
    }
}
