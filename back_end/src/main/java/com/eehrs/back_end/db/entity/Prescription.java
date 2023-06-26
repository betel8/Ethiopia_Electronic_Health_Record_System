package com.eehrs.back_end.db.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Prescription {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long Id;
    @Column(nullable = false)
    private String dragName,dosage;
    @Column(nullable = false)
    private LocalDate datePrescription=LocalDate.now();
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "diagnosis", nullable=false )
    private Diagnosis diagnosis;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "byDoctor", nullable=false )
    private Doctor byDoctor;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "acceptedBy" )
    private Pharmacist acceptedBy;





    public Diagnosis getDiagnosis() {
        return diagnosis;
    }

    public void setDiagnosis(Diagnosis diagnosis) {
        this.diagnosis = diagnosis;
    }

    public LocalDate getDatePrescription() {
        return datePrescription;
    }

    public void setDatePrescription(LocalDate datePrescription) {
        this.datePrescription = datePrescription;
    }

    public String getDragName() {
        return dragName;
    }

    public void setDragName(String dragName) {
        this.dragName = dragName;
    }

    public String getDosage() {
        return dosage;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }


    public Doctor getByDoctor() {
        return byDoctor;
    }

    public void setByDoctor(Doctor byDoctor) {
        this.byDoctor = byDoctor;
    }

    public Pharmacist getAcceptedBy() {
        return acceptedBy;
    }

    public void setAcceptedBy(Pharmacist acceptedBy) {
        this.acceptedBy = acceptedBy;
    }

    public void setId(Long id) {
        Id = id;
    }
    public Long getId(){
        return Id;
    }
}
