package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import com.example.demo.entities.State;

public interface StateManager {
	
	List <State> getAllStates();
	Optional<State> getStateById(int id);
}
