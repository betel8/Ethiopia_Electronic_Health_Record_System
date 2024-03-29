package com.eehrs.back_end.db.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Speciality {
    @Id
    @Column(unique = true,nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long SID;
    @Column(nullable = false)
    private String Title,UniversityName;
    @Column(nullable = false)
    private LocalDate year;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "academicDetail", nullable=false )
    private AcademicDetail academicDetail;
    public Speciality(){}
    public Speciality(String title, String universityName, LocalDate year) {
        Title = title;
        UniversityName = universityName;
        this.year = year;
    }

    public long getSID() {
        return SID;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }

    public String getUniversityName() {
        return UniversityName;
    }

    public void setUniversityName(String universityName) {
        UniversityName = universityName;
    }

    public LocalDate getYear() {
        return year;
    }

    public void setYear(LocalDate year) {
        this.year = year;
    }

    public void setSID(Long SID) {
        this.SID = SID;
    }

    public AcademicDetail getAcademicDetail() {
        return academicDetail;
    }

    public void setAcademicDetail(AcademicDetail academicDetail) {
        this.academicDetail = academicDetail;
    }
}
