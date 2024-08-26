package com.example.demo.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Airport 
{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int airportId;
	@Column(unique = true)
	private String airportCode;
    private String airportName;
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "cityId")
    private City cityId;
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "stateId")
    private State stateId;
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "hubId")
    private Hub hubId;
    
	public int getAirportId()
	{
		return airportId;
	}

	public String getAirportCode() 
	{
		return airportCode;
	}

	public void setAirportCode(String airportCode)
	{
		this.airportCode = airportCode;
	}

	public String getAirportName()
	{
		return airportName;
	}

	public void setAirportName(String airportName) 
	{
		this.airportName = airportName;
	}

	public City getCityId()
	{
		return cityId;
	}

	public void setCityId(City cityId) 
	{
		this.cityId = cityId;
	}

	public State getStateId()
	{
		return stateId;
	}

	public void setStateId(State stateId) 
	{
		this.stateId = stateId;
	}

	public Hub getHubId()
	{
		return hubId;
	}

	public void setHubId(Hub hubId)
	{
		this.hubId = hubId;
	}
}
