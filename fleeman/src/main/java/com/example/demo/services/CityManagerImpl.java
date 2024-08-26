package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.City;
import com.example.demo.repositories.CityRepository;

@Service
public class CityManagerImpl implements CityManager {
	
	@Autowired
	private CityRepository c_repository;

	@Override
	public List<City> getAllCities() {
		// TODO Auto-generated method stub
		return c_repository.findAll();
	}

	@Override
	public Optional<City> getCityById(int id) {
		// TODO Auto-generated method stub
		return c_repository.findById(id);
	}

	@Override
	public List<City> getCityByState(int state_id) {
		// TODO Auto-generated method stub
		return c_repository.getCitybyState(state_id);
	}

	

}
