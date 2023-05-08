package com.eehrs.back_end.db.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class AcademicDetail {
    @Id
    @Column(name="user_id")
    private Long id;
    @Column(nullable=false)
    private double cgpa;
    @Column(nullable = false)
    private LocalDate yearOfGraduation;
    @Column(nullable = false)
    private String universityName,qualification;
    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;
/*
    @JsonManagedReference
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "speciality")
    private Speciality speciality;
*/
    public AcademicDetail (){}

    public AcademicDetail(double cgpa, LocalDate yearOfGraduation, String universityName, String qualification,User user ) {
        this.cgpa = cgpa;
        this.yearOfGraduation = yearOfGraduation;
        this.universityName = universityName;
        this.user=user;
        this.qualification=qualification;
    }

    public long getId() {
        return id;
    }
/*
    public Speciality getSpeciality() {
        return speciality;
    }

    public void setSpeciality(Speciality speciality) {
        this.speciality = speciality;
    }*/

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

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
