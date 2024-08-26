package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.State;
import com.example.demo.services.StateManager;

@RestController
@CrossOrigin
public class StateController {

	@Autowired
	private StateManager s_manager;
	
	@GetMapping("/state")
	public List<State> getAllStates()
	{
		return s_manager.getAllStates();
	}
	
	@GetMapping("/state/{id}")
	public Optional<State> getStateById(@PathVariable int id)
	{
		return s_manager.getStateById(id);
	}
}
