package com.eehrs.back_end.db.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class AcademicDetail {
    @Id
    @Column(nullable = false,unique = true)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ACID;
    @Column(nullable=false)
    private double cgpa;
    @Column(nullable = false)
    private LocalDate yearOfGraduation;
    @Column(nullable = false)
    private String universityName;

    @JsonBackReference
    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL,mappedBy = "academicDetail")
    private PersonalDetail personalDetail;
    @JsonManagedReference
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "speciality")
    private Speciality speciality;

    public AcademicDetail (){}

    public AcademicDetail(double cgpa, LocalDate yearOfGraduation, String universityName) {
        this.cgpa = cgpa;
        this.yearOfGraduation = yearOfGraduation;
        this.universityName = universityName;
    }

    public long getACID() {
        return ACID;
    }

    public Speciality getSpeciality() {
        return speciality;
    }

    public void setSpeciality(Speciality speciality) {
        this.speciality = speciality;
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
