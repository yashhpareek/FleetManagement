package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import com.example.demo.entities.Hub;

public interface HubManager {
	
	List<Hub> getAllHubs();
	List<Hub> gethubbycityId(int City_id);
}


