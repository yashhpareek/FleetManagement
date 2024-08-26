package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.AddOn;
//import com.example.demo.entities.Hub;
import com.example.demo.repositories.AddOnRepository;


@Service

public class AddOnManagerImpl implements AddOnManager {
	
	
	@Autowired
	private AddOnRepository Ao_repository;

	@Override
	public List<AddOn> getAllAddOns() {
		return Ao_repository.findAll();
	}

}
