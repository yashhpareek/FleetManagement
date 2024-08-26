package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "State_Master")
public class State {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int stateId;

    @Column(unique = true) // Making stateName unique
    private String stateName;

    // Default constructor
    public State() {
    }

    // Parameterized constructor
    public State(String stateName) {
        this.stateName = stateName;
    }

    // Getters and setters
    public int getStateId() {
        return stateId;
    }

    public void setStateId(int stateId) {
        this.stateId = stateId;
    }

    public String getStateName() {
        return stateName;
    }

    public void setStateName(String stateName) {
        this.stateName = stateName;
    }

    // toString method (optional)
    @Override
    public String toString() {
        return "State [stateId=" + stateId + ", stateName=" + stateName + "]";
    }
}
