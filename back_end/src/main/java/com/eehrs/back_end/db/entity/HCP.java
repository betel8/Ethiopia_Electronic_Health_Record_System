package com.eehrs.back_end.db.entity;

import jakarta.persistence.*;

@Entity
public class HCP {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long ID;
    @Column(nullable = false,unique = true)
    private String companyName;
    @Column(nullable = false)
    private String speciality,city,subCity,owner,workPhone;

    @Column(nullable = false)
    private int woreda;

    public HCP(){}

    public HCP(String companyName, String speciality, String city, String subCity, HealthCarePersonnel owner, String workPhone, int woreda) {
        this.companyName = companyName;

        this.speciality = speciality;
        this.city = city;
        this.subCity = subCity;
        this.workPhone = workPhone;
        this.woreda = woreda;
    }

    public int getWoreda() {
        return woreda;
    }

    public void setWoreda(int woreda) {
        this.woreda = woreda;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
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

    public Long getID() {
        return ID;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getWorkPhone() {
        return workPhone;
    }

    public void setWorkPhone(String workPhone) {
        this.workPhone = workPhone;
    }
}
