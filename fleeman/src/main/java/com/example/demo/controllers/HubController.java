package com.example.demo.controllers;

import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.Hub;
import com.example.demo.services.HubManager;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@CrossOrigin
public class HubController {
	
	@Autowired
	private HubManager h_manager;
	
	@GetMapping("/hub")
	public List<Hub> getAllHubs(){
	
	 return h_manager.getAllHubs();	}
	
	
	
	@GetMapping("/hub/{id}")
	public List<Hub> gethubbycityId(@PathVariable int id){
		return h_manager.gethubbycityId(id);
	}
	

}
