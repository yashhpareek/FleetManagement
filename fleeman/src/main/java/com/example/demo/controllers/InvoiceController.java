package com.example.demo.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Invoice;
import com.example.demo.services.InvoiceManager;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin
public class InvoiceController {

	@Autowired
	private InvoiceManager i_manager;
	@GetMapping("/invoice/{id}") 
	public List<Invoice> getbillingbybookid(@PathVariable int id) {
		return i_manager.getbillingbybookid(id);
	}
	@PostMapping("/invoice")
	public Invoice addInvoice(@RequestBody Invoice invoice)
	{
		return i_manager.addInvoice(invoice);
	}
	@GetMapping("/invoice/email/{email}") 
	public List<Invoice> getbillingbyemailid(@PathVariable String email) {
		return i_manager.getbillingbyEmailid(email);
	}
	@GetMapping("/invoice/{totalAddonAmount}/{totalAmount}/{rentalAmount}/{invoiceId}") 
	public void update(@PathVariable double totalAddonAmount,@PathVariable double totalAmount,@PathVariable double rentalAmount,@PathVariable long invoiceId) {
		 i_manager.update(totalAddonAmount, totalAmount, rentalAmount, invoiceId);
	}
}
