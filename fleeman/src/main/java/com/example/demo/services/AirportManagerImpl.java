package com.example.demo.services;

import java.util.List;

import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Airport;
import com.example.demo.repositories.AirportRepository;

@Service
public class AirportManagerImpl implements AirportManager
{
	@Autowired
	private AirportRepository airportRepository;
	
	@Override
	public List<Airport> getAllAirport() 
	{
		// TODO Auto-generated method stub
		return airportRepository.findAll();
	}

	@Override
	public java.util.Optional<Airport> getAirportById(int id)
	{
        return airportRepository.findById(id);
    }

	@Override
	public List<String> getAllAirportCodes() 
	{
		return airportRepository.getAllAirportCodes();
	}

}
