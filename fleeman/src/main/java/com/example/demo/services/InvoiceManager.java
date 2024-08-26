package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.query.Param;

import com.example.demo.entities.Invoice;

public interface InvoiceManager {
	Invoice addInvoice(Invoice invoice);
	List<Invoice> getbillingbybookid(int id);
	List<Invoice> getbillingbyEmailid(String Email);
	void update(double totalAddonAmount,double totalAmount,double rentalAmount,long invoiceId);
}
