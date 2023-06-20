package com.eehrs.back_end.db.entity;

import jakarta.persistence.*;

@Entity
public class TechnicalSupport {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long ID;

    private HealthCarePersonnel from;

    @Column(nullable = false)
    private String message,answer;

    @Column(nullable = false)
    private boolean answered=false;
    
    private Admin handledBy;

    public TechnicalSupport() {}


    public HealthCarePersonnel getFrom() {
        return from;
    }

    public void setFrom(HealthCarePersonnel from) {
        this.from = from;
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

    public Admin getHandledBy() {
        return handledBy;
    }

    public void setHandledBy(Admin handledBy) {
        this.handledBy = handledBy;
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
}
