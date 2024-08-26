package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.CarType;
import com.example.demo.repositories.CarTypeRepository;

@Service
public class CarTypeManagerImpl implements CarTypeManager
{
	@Autowired
	private CarTypeRepository ct_repository;

	@Override
	public List<CarType> getAllCategories() 
	{
		return ct_repository.findAll();
	}

}
