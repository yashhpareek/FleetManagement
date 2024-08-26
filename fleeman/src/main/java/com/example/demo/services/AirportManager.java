package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import com.example.demo.entities.Airport;

public interface AirportManager 
{
	List<Airport> getAllAirport();
	Optional<Airport> getAirportById(int id);
	List<String> getAllAirportCodes();
}