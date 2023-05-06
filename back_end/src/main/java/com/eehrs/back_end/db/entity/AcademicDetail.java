package com.eehrs.back_end.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;

import java.time.LocalDate;

@Entity
public class AcademicDetail {
    @Column(nullable=false)
    private double cgpa;
    @Column(nullable = false)
    private LocalDate yearOfGraduation;
    @Column(nullable = false)
    private String universityName;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL,mappedBy = "PDID")
    private PersonalDetail personalDetail;


    public AcademicDetail (){}

    public AcademicDetail(double cgpa, LocalDate yearOfGraduation, String universityName) {
        this.cgpa = cgpa;
        this.yearOfGraduation = yearOfGraduation;
        this.universityName = universityName;
    }


    public LocalDate getYearOfGraduation() {
        return yearOfGraduation;
    }

    public void setYearOfGraduation(LocalDate yearOfGraduation) {
        this.yearOfGraduation = yearOfGraduation;
    }

    public String getUniversityName() {
        return universityName;
    }

    public void setUniversityName(String universityName) {
        this.universityName = universityName;
    }

    public double getCgpa() {
        return cgpa;
    }

    public void setCgpa(double cgpa) {
        this.cgpa = cgpa;
    }
}
