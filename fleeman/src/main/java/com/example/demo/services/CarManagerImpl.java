package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Car;
import com.example.demo.repositories.CarRepository;


@Service
public class CarManagerImpl implements CarManager
{
	@Autowired
	private CarRepository car_repository;
	
	@Override
	public Optional<Car> getCarByHub(long hub_id) 
	{
		return car_repository.findById(hub_id);
	}

	@Override
	public List<Car> getCarByHubAndCategory(long hub_id, long CarType_ID) 
	{
		return car_repository.findByHubIdAndCategoryId(hub_id, CarType_ID);
	}
	public void UpdateAvailable(long carId) 
	{
		car_repository.updateCarAvailability(carId);
	}

	@Override
	public void returnd(int id, String s) {
		car_repository.returned(id, s);
		
	}

	@Override
	public Optional<Car> getCar(long carid) {
		// TODO Auto-generated method stub
		return car_repository.findById(carid);
	}




}
