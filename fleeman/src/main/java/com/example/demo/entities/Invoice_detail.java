package com.example.demo.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class Invoice_detail {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int IdetailId;

	
//	@ManyToOne
//	@JoinColumn(name = "Invoice_id") 
//	private Invoice invoice;
//	
	private int invoice_id;
	public int getInvoice_id() {
		return invoice_id;
	}
	public void setInvoice_id(int invoice_id) {
		this.invoice_id = invoice_id;
	}
	public int getAddon_id() {
		return addon_id;
	}
	public void setAddon_id(int addon_id) {
		this.addon_id = addon_id;
	}
	private int addon_id;
//	
//	@ManyToOne
//	@JoinColumn(name = "AddonId") 
//	private AddOn addon;
	private int amt;
	public int getIdetailId() {
		return IdetailId;
	}
	public void setIdetailId(int idetailId) {
		IdetailId = idetailId;
	}
//	public Invoice getInvoice() {
//		return invoice;
//	}
//	public void setInvoice(Invoice invoice) {
//		this.invoice = invoice;
//	}
//	public AddOn getAddon() {
//		return addon;
//	}
//	public void setAddon(AddOn addon) {
//		this.addon = addon;
//	}
	public int getAmt() {
		return amt;
	}
	public void setAmt(int amt) {
		this.amt = amt;
	}
	
}
