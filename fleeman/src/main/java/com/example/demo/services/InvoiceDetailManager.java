package com.example.demo.services;

import java.util.List;

import com.example.demo.entities.Invoice_detail;

public interface InvoiceDetailManager {

	List<Invoice_detail> getInvoice_detail(int id);
	Invoice_detail addInvoice_detail(Invoice_detail Book);
}
