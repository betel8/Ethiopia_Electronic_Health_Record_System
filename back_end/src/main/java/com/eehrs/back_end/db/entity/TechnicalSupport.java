package com.eehrs.back_end.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class TechnicalSupport {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long ID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fromUser", nullable=false )
    private HealthCarePersonnel fromUser;

    @Column(nullable = false)
    private String message;
    @Column(nullable = true)
    private String answer;

    @Column(nullable = false)
    private boolean answered=false;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "answeredBy" )
    private Admin answeredBy;



    public TechnicalSupport() {}


    public HealthCarePersonnel getFromUser() {
        return fromUser;
    }

    public void setFromUser(HealthCarePersonnel from) {
        this.fromUser = from;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }



    public Long getID() {
        return ID;
    }

    public boolean isAnswered() {
        return answered;
    }

    public void setAnswered(boolean answered) {
        this.answered = answered;
    }

    public Admin getAnsweredBy() {
        return answeredBy;
    }

    public void setAnsweredBy(Admin answeredBy) {
        this.answeredBy = answeredBy;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }
}
