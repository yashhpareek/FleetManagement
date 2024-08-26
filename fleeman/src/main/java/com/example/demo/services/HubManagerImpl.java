package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Hub;
import com.example.demo.repositories.HubRepository;

@Service
public class HubManagerImpl implements HubManager{
	
	@Autowired
	private HubRepository Hb_repository;

	@Override
	public List<Hub> getAllHubs() {
		// TODO Auto-generated method stub
		return Hb_repository.findAll();
	}
	
	public List<Hub> gethubbycityId(int City_id){
//		return Hb_repository.findById(id);
		return (Hb_repository.getHubByCityId(City_id));
	}
	
	
	
 
}
