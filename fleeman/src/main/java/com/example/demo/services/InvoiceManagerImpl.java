package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Invoice;
import com.example.demo.repositories.InvoiceRepository;

@Service
public class InvoiceManagerImpl implements InvoiceManager{

	@Autowired
	private InvoiceRepository i_repository;
	
	@Override
	public Invoice addInvoice(Invoice invoice) {
		// TODO Auto-generated method stub
		return i_repository.save(invoice);
		
	}

	@Override
	public List<Invoice> getbillingbybookid(int id) {
		// TODO Auto-generated method stub
		return i_repository.getBillingByBookingId(id);
	}

	@Override
	public List<Invoice> getbillingbyEmailid(String Email) {
		// TODO Auto-generated method stub
		return i_repository.getBillingByEmailId(Email);
	}

	@Override
	public void update(double totalAddonAmount, double totalAmount, double rentalAmount, long invoiceId) {
		// TODO Auto-generated method stub
		i_repository.updateInvoiceNew(totalAddonAmount, totalAmount, rentalAmount, invoiceId);
	}

	

}
