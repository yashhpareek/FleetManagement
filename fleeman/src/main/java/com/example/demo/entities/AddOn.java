package com.example.demo.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "AddOn")
public class AddOn {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int addonId;
    
   
    private String addonName;
    
    
    private BigDecimal addonDailyRate;
    
    
    private LocalDateTime rateValidUntil;


    
    public int getAddonId() {
        return addonId;
    }

    public void setAddonId(int addonId) {
        this.addonId = addonId;
    }

    public String getAddonName() {
        return addonName;
    }

    public void setAddonName(String addonName) {
        this.addonName = addonName;
    }

    public BigDecimal getAddonDailyRate() {
        return addonDailyRate;
    }

    public void setAddonDailyRate(BigDecimal addonDailyRate) {
        this.addonDailyRate = addonDailyRate;
    }

    public LocalDateTime getRateValidUntil() {
        return rateValidUntil;
    }

    public void setRateValidUntil(LocalDateTime rateValidUntil) {
        this.rateValidUntil = rateValidUntil;
    }

    @Override
    public String toString() {
        return "AddOn{" +
                "addonId=" + addonId +
                ", addonName='" + addonName + '\'' +
                ", addonDailyRate=" + addonDailyRate +
                ", rateValidUntil=" + rateValidUntil +
                '}';
    }
}
