package com.example.demo.entities;
import jakarta.persistence.*;

@Entity
@Table(name = "Hub")
public class Hub {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int hubId;
    
    private String hubName;
    
    @Column(name = "Hub_Address_and_Details", columnDefinition = "TEXT")
    private String hubAddressAndDetails;
    
    @Column(name = "contactNumber", unique = true) 
    private Long contactNumber;
    
    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;
    
    @ManyToOne
    @JoinColumn(name = "state_id")
    private State state;

    // Constructors
    
    public Hub() {
    }

    // Getters and setters

    public int getHubId() {
        return hubId;
    }

    public void setHubId(int hubId) {
        this.hubId = hubId;
    }

    public String getHubName() {
        return hubName;
    }

    public void setHubName(String hubName) {
        this.hubName = hubName;
    }

    public String getHubAddressAndDetails() {
        return hubAddressAndDetails;
    }

    public void setHubAddressAndDetails(String hubAddressAndDetails) {
        this.hubAddressAndDetails = hubAddressAndDetails;
    }

    public Long getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(Long contactNumber) {
        this.contactNumber = contactNumber;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    // toString method

    @Override
    public String toString() {
        return "Hub{" +
                "hubId=" + hubId +
                ", hubName='" + hubName + '\'' +
                ", hubAddressAndDetails='" + hubAddressAndDetails + '\'' +
                ", contactNumber=" + contactNumber +
                ", city=" + city +
                ", state=" + state +
                '}';
    }
}
