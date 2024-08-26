package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.CarType;
import com.example.demo.services.CarTypeManager;

@RestController
@CrossOrigin
public class CarTypeController 
{
	@Autowired
	private CarTypeManager ct_manager;
	
	@GetMapping("/cartype")
	public List<CarType> getAllCategories()
	{
		return ct_manager.getAllCategories();
	}
	
}
