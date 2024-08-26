package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.Airport;


public interface AirportRepository extends JpaRepository<Airport, Integer>
{
	@Query(value = "select DISTINCT(airport_Code) from Airport", nativeQuery = true)
    public List<String> getAllAirportCodes();
}
