package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.State;
import com.example.demo.repositories.StateRepository;

@Service
public class StateManagerImpl implements StateManager{
	
	@Autowired
	private StateRepository s_repository;

	@Override
	public List<State> getAllStates() {
		// TODO Auto-generated method stub
		return s_repository.findAll();
	}

	@Override
	public Optional<State> getStateById(int id) {
		// TODO Auto-generated method stub
		return s_repository.findById(id);
	}

	
}
