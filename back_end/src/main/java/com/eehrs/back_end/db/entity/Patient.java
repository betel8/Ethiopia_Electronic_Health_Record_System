package com.eehrs.back_end.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Patient {
    @Id
    @Column(unique = true,nullable = false)
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long ID;

    @Column(nullable = false)
    private String fName,mname,lname,gender,bloodType,cellphone,contact,subCity,city;
    @Column(nullable = false)
    private int age,woreda;
    @Column(nullable = false)
    private LocalDate addedTime=LocalDate.now();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "addedBy", nullable=false )
    private HealthCarePersonnel addedBy;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "admitted")
    private HCP admitted;
    @JsonIgnore
    @OneToMany(cascade=CascadeType.ALL, mappedBy="user")
    private List<Diagnosis> diagnosisList=new ArrayList<Diagnosis>();

    public Patient(){}


    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }



    public String getCellphone() {
        return cellphone;
    }

    public void setCellphone(String cellphone) {
        this.cellphone = cellphone;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public Long getID() {
        return ID;
    }

    public HealthCarePersonnel getAddedBy() {
        return addedBy;
    }

    public void setAddedBy(HealthCarePersonnel addedBy) {
        this.addedBy = addedBy;
    }

    public LocalDate getAddedTime() {
        return addedTime;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getSubCity() {
        return subCity;
    }

    public void setSubCity(String subCity) {
        this.subCity = subCity;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getWoreda() {
        return woreda;
    }

    public void setWoreda(int woreda) {
        this.woreda = woreda;
    }

    public String getBloodType() {
        return bloodType;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public String getMname() {
        return mname;
    }

    public void setMname(String mname) {
        this.mname = mname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public HCP getAdmitted() {
        return admitted;
    }

    public void setAdmitted(HCP admitted) {
        this.admitted = admitted;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }
}
