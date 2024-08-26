package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import com.example.demo.entities.Customer;




public interface CustomerManager {
	 void addCustomer(Customer customer);
	 List<Customer> getAllCustomers();
	 boolean login(String email,String password);
	 Customer getCustomerByEmialId(String email);
	 Optional<Customer> getCustomerid(int email);
}
