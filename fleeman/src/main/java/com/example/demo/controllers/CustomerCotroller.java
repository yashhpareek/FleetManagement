package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.services.CustomerManager;


@RestController
@CrossOrigin
public class CustomerCotroller {
	@Autowired
	private CustomerManager c_manager;
	
	@GetMapping("/getcustomer")
	public List<Customer> getAllCustomers()
	{
		return c_manager.getAllCustomers();
	}
	
	@GetMapping("/getcustomer/id/{id}")
	public Optional<Customer> getCustomers(@PathVariable int id)
	{
		return c_manager.getCustomerid(id);
	}
	
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/customer/{email}")
	public Customer getCustomerByEmialId(@PathVariable String email)
	{
		return c_manager.getCustomerByEmialId(email);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/customer")
	public void addCourse(@RequestBody Customer customer)
	{
		c_manager.addCustomer(customer);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/login/{email}/{password}")
    public boolean login(@PathVariable String email,@PathVariable String password)
	{
		return c_manager.login(email, password);
	}
}
