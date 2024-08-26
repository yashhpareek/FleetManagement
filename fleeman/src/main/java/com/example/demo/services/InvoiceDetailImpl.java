package com.example.demo.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Invoice_detail;
import com.example.demo.repositories.InvoiceDetailRepository;

@Service
public class InvoiceDetailImpl implements InvoiceDetailManager{

	@Autowired
	private InvoiceDetailRepository IDR;
	

	@Override
	public List<Invoice_detail> getInvoice_detail(int id) {
		// TODO Auto-generated method stub
		return IDR.getmain(id);
	}

	@Override
	public Invoice_detail addInvoice_detail(Invoice_detail Book) {
		// TODO Auto-generated method stub
		return IDR.save(Book);
	}
	
}
