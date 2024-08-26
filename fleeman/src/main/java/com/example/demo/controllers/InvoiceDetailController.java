package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.Invoice_detail;
import com.example.demo.services.InvoiceDetailManager;

@RestController
@CrossOrigin
public class InvoiceDetailController {
	
	@Autowired
	private InvoiceDetailManager Imr;
	
	@GetMapping("/Invoice_details/{id}")
	public List<Invoice_detail> getAllAddOns(@PathVariable int id) {
		
		return Imr.getInvoice_detail(id);
		
	}
	@PostMapping("/Invoice_details")
	public Invoice_detail postAllAddOns(@RequestBody Invoice_detail booking2) {
		
		return Imr.addInvoice_detail(booking2);
		
	}
}
