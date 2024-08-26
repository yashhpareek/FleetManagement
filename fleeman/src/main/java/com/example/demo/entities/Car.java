package com.example.demo.entities;


import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name = "Car",
        uniqueConstraints = {@UniqueConstraint(columnNames = {"number_plate"})})
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Car_ID")
    private Long carId;

    @ManyToOne
    @JoinColumn(name = "CarType_ID")
    private CarType carType;

    @Column(name = "Car_Name")
    private String carName;

    @Column(name = "Number_Plate", unique = true, length = 50)
    private String numberPlate;

    @Column(name = "Status", length = 50)
    private String Status;

    @Column(name = "Capacity")
    private int capacity;

    @Column(name = "Mileage")
    private double mileage;

    @ManyToOne
    @JoinColumn(name = "Hub_ID")
    private Hub hub;

    @Enumerated(EnumType.STRING)
    @Column(name = "Is_Available", length = 1)
    private AvailabilityStatus isAvailable;

    @Column(name = "Maintenance_Due_Date")
    private Date maintenanceDueDate;

    public enum AvailabilityStatus {
        Y, N
    }

    // Constructors

    // Getters and setters

    public Long getCarId() {
        return carId;
    }

    public void setCarId(Long carId) {
        this.carId = carId;
    }

    public CarType getCarType() {
        return carType;
    }

    public void setCarType(CarType carType) {
        this.carType = carType;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }

    public String getNumberPlate() {
        return numberPlate;
    }

    public void setNumberPlate(String numberPlate) {
        this.numberPlate = numberPlate;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String fuelType) {
        this.Status = Status;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public double getMileage() {
        return mileage;
    }

    public void setMileage(double mileage) {
        this.mileage = mileage;
    }

    public Hub getHub() {
        return hub;
    }

    public void setHub(Hub hub) {
        this.hub = hub;
    }

    public AvailabilityStatus getIsAvailable() {
        return isAvailable;
    }

    public void setIsAvailable(AvailabilityStatus isAvailable) {
        this.isAvailable = isAvailable;
    }

    public Date getMaintenanceDueDate() {
        return maintenanceDueDate;
    }

    public void setMaintenanceDueDate(Date maintenanceDueDate) {
        this.maintenanceDueDate = maintenanceDueDate;
    }
}
