package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.City;
import com.example.demo.services.CityManager;

@RestController
@CrossOrigin
public class CityController {

	@Autowired
	private CityManager c_manager;
	
	@GetMapping("/city")
	public List<City> getAllCities()
	{
		return c_manager.getAllCities();
	}
	
	@GetMapping("/city/id/{id}")
	public Optional<City> getCityById(@PathVariable int id)
	{
		return c_manager.getCityById(id);
	}
	@GetMapping("/cities/{state_id}")
	public List<City> getCityByState(@PathVariable int state_id)
	{
		return c_manager.getCityByState(state_id);
	}
}
