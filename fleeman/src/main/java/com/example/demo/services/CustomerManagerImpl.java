package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.repositories.CustomerRepository;




@Service
public class CustomerManagerImpl implements CustomerManager{
	@Autowired
	private CustomerRepository c_repository;
	

	@Override
	public void addCustomer(Customer customer) {
		// TODO Auto-generated method stub
		c_repository.save(customer);
	}

	@Override
	public List<Customer> getAllCustomers() {
		// TODO Auto-generated method stub
		return c_repository.findAll();
	}

	@Override
	public boolean login(String email, String password) {
		 int count = c_repository.login(email, password);
	        return count > 0;
	}

	
	public Customer getCustomerByEmialId(String email) {
		// TODO Auto-generated method stub
		return c_repository.getCustomerByEmialId(email);
	}

	@Override
	public Optional<Customer> getCustomerid(int email) {
		// TODO Auto-generated method stub
		return c_repository.findById(email);
	}

	

	
	

}
