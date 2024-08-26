package com.example.demo.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.AddOn;
import com.example.demo.services.AddOnManager;



@RestController
@CrossOrigin
public class AddOnController {

    @Autowired
	private AddOnManager addon_manager;
	
    @GetMapping("/addon")
	public List<AddOn> getAllAddOns() {
		
		return addon_manager.getAllAddOns();
		
	}
    
}
