package com.eehrs.back_end.db.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class PersonalDetail {
    @Id
    @Column(nullable = false,unique = true)
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long PDID;
    @Column(nullable=false)
    private String fName,lName,city,subCity,gender,cellPhone1,birthPlace,motherTongue;
    @Column(nullable=false)
    private int woreda;
    @Column(nullable=false)
    private LocalDate dob;
    @Column(nullable = true)
    private String cellPhone2;

    /*@JsonIgnore
    @JsonBackReference
    @OneToOne(cascade = CascadeType.ALL,mappedBy = "personalDetail")
    private User user;*/
    @JsonManagedReference
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "AcademicDetail",nullable = false)
    private AcademicDetail academicDetail;
    public PersonalDetail(){}

    public PersonalDetail(String fName, String lName, String city, String subCity, String gender, String cellPhone1,
                          String birthPlace, String motherTongue, int woreda, LocalDate dob, String cellPhone2, AcademicDetail academicDetail){
        this.fName = fName;
        this.lName = lName;
        this.city = city;
        this.subCity = subCity;
        this.gender = gender;
        this.cellPhone1 = cellPhone1;
        this.birthPlace = birthPlace;
        this.motherTongue = motherTongue;
        this.woreda = woreda;
        this.dob = dob;
        this.cellPhone2 = cellPhone2;
        this.academicDetail = academicDetail;
    }

    public Long getPDID() {
        return PDID;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getSubCity() {
        return subCity;
    }

    public void setSubCity(String subCity) {
        this.subCity = subCity;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCellPhone1() {
        return cellPhone1;
    }

    public void setCellPhone1(String cellPhone1) {
        this.cellPhone1 = cellPhone1;
    }

    public String getBirthPlace() {
        return birthPlace;
    }

    public void setBirthPlace(String birthPlace) {
        this.birthPlace = birthPlace;
    }

    public String getMotherTongue() {
        return motherTongue;
    }

    public void setMotherTongue(String motherTongue) {
        this.motherTongue = motherTongue;
    }

    public int getWoreda() {
        return woreda;
    }

    public void setWoreda(int woreda) {
        this.woreda = woreda;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public String getCellPhone2() {
        return cellPhone2;
    }

    public void setCellPhone2(String cellPhone2) {
        this.cellPhone2 = cellPhone2;
    }

    public AcademicDetail getAcademicDetail() {
        return academicDetail;
    }

    public void setAcademicDetail(AcademicDetail academicDetail) {
        this.academicDetail = academicDetail;
    }
}
