package com.example.demo.entities;

import java.time.LocalDateTime;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class Invoice {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int invoiceId;
	
	private String empName; 
	private String cName; 
	private String cEmailId; 
	private String cMobileNo; 
	private String cAadharNo; 
	private String cPassNo; 
	
	private double rentalAmount; 
	private double totalAmount;
	private double totalAddonAmount;
	private double rate;
	
	private LocalDateTime startDate; 
	private LocalDateTime handoverDate; 
	
	private LocalDateTime endDate;

	public int getInvoiceId() {
		return invoiceId;
	}

	public void setInvoiceId(int invoiceId) {
		this.invoiceId = invoiceId;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public String getcName() {
		return cName;
	}

	public void setcName(String cName) {
		this.cName = cName;
	}

	public String getcEmailId() {
		return cEmailId;
	}

	public void setcEmailId(String cEmailId) {
		this.cEmailId = cEmailId;
	}

	public String getcMobileNo() {
		return cMobileNo;
	}

	public void setcMobileNo(String cMobileNo) {
		this.cMobileNo = cMobileNo;
	}

	public String getcAadharNo() {
		return cAadharNo;
	}

	public void setcAadharNo(String cAadharNo) {
		this.cAadharNo = cAadharNo;
	}

	public String getcPassNo() {
		return cPassNo;
	}

	public void setcPassNo(String cPassNo) {
		this.cPassNo = cPassNo;
	}

	public double getRentalAmount() {
		return rentalAmount;
	}

	public void setRentalAmount(double rentalAmount) {
		this.rentalAmount = rentalAmount;
	}

	public double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}

	public double getTotalAddonAmount() {
		return totalAddonAmount;
	}

	public void setTotalAddonAmount(double totalAddonAmount) {
		this.totalAddonAmount = totalAddonAmount;
	}

	public double getRate() {
		return rate;
	}

	public void setRate(double rate) {
		this.rate = rate;
	}

	public LocalDateTime getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDateTime startDate) {
		this.startDate = startDate;
	}

	public LocalDateTime getHandoverDate() {
		return handoverDate;
	}

	public void setHandoverDate(LocalDateTime handoverDate) {
		this.handoverDate = handoverDate;
	}

	public LocalDateTime getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDateTime endDate) {
		this.endDate = endDate;
	} 
//	@ManyToOne(fetch = FetchType.EAGER)
//	@JoinColumn(name = "bookingId") 
//	private Booking booking;
//	
//	public Booking getBooking() {
//		return booking;
//	}
//
//	public void setBooking(Booking booking) {
//		this.booking = booking;
//	}
	
	private int bookid;

	public int getBookid() {
		return bookid;
	}

	public void setBookid(int bookid) {
		this.bookid = bookid;
	}

//	public Car getCar() {
//		return car;
//	}
//
//	public void setCar(Car car) {
//		this.car = car;
//	}
//
//	public Customer getCustomer() {
//		return customer;
//	}
//
//	public void setCustomer(Customer customer) {
//		this.customer = customer;
//	}
//	@ManyToOne(fetch = FetchType.EAGER)
//	@JoinColumn(name = "carId")
//	private Car car;
//	
	private int carid;
	private int customerid;
//	@ManyToOne(fetch = FetchType.EAGER)
//	@JoinColumn(name = "customerId") 
//	private Customer customer;
	
	public int getCarid() {
		return carid;
	}

	public void setCarid(int carid) {
		this.carid = carid;
	}

	public int getCustomerid() {
		return customerid;
	}

	public void setCustomerid(int customerid) {
		this.customerid = customerid;
	}

	public int getP_hubId() {
		return p_hubId;
	}

	public void setP_hubId(int p_hubId) {
		this.p_hubId = p_hubId;
	}

	public int getR_hubId() {
		return r_hubId;
	}

	public void setR_hubId(int r_hubId) {
		this.r_hubId = r_hubId;
	}

	@Column(name = "p_hubId")
    private int p_hubId;
    	
    @Column(name = "r_hubId")
    private int r_hubId;

@Enumerated(EnumType.STRING)
	    @Column(name = "isReturned", length = 1)
	    private Return_Status isReturned;
	 
	public Return_Status getIsReturned() {
		return isReturned;
	}

	public void setIsReturned(Return_Status isReturned) {
		this.isReturned = isReturned;
	}

	public enum Return_Status {
        Y, N
    }
}
