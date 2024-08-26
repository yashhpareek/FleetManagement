package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Car;
import com.example.demo.services.CarManager;

@RestController
@CrossOrigin
public class CarController 
{
	@Autowired
	private CarManager car_manager;
	
	@GetMapping("/car/{hub_id}")
	public Optional<Car> getCarByHub(@PathVariable long hub_id) 
	{
		return car_manager.getCarByHub(hub_id);
	}
	@GetMapping("/car/id/{hub_id}")
	public Optional<Car> getCarId(@PathVariable long hub_id) 
	{
		return car_manager.getCar(hub_id);
	}

	@GetMapping("/car/{hub_id}/{CarType_ID}")
	public List<Car> getCarByHubAndCategory(@PathVariable long hub_id,@PathVariable long CarType_ID) 
	{
		return car_manager.getCarByHubAndCategory(hub_id, CarType_ID);
	}
	@CrossOrigin
	@PutMapping("/car/update/{carId}")
    public void updateCarAvailability(@PathVariable long carId) 
	{
		car_manager.UpdateAvailable(carId);
	}
	@CrossOrigin
	@PutMapping("/car/update/{carId}/{status}")
    public void updateCar(@PathVariable int carId,@PathVariable String status) 
	{
		car_manager.returnd(carId, status);
	}
	
}