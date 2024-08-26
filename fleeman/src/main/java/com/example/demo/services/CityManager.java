package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import com.example.demo.entities.City;

public interface CityManager {

	List <City> getAllCities();
	Optional<City> getCityById(int id);
	List<City> getCityByState(int state_id);
	
}
