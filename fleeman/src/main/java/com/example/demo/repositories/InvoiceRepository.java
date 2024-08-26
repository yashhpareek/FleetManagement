package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.hibernate.type.TrueFalseConverter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Invoice;

import jakarta.transaction.Transactional;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice,Integer>{
	@Query(value = "select * from Invoice where bookid = 1", nativeQuery = true)
	public List<Invoice> getBillingByBookingId(@Param("bookingId") int bookingId); 
	
	@Query(value = "select * from Invoice where c_email_id = :c_email_id and is_returned='N'", nativeQuery = true)
	public List<Invoice> getBillingByEmailId(@Param("c_email_id") String c_email_id); 
	
	@Transactional
	@Modifying
	@Query(value = "UPDATE Invoice SET is_returned = 'Y', total_addon_amount = :totalAddonAmount,total_amount = :totalAmount, end_date = NOW(), rental_amount = :rentalAmount WHERE invoice_id = :invoiceId",nativeQuery = true)
	void updateInvoiceNew(@Param("totalAddonAmount") double totalAddonAmount,@Param("totalAmount") double totalAmount, @Param("rentalAmount") double rentalAmount, @Param("invoiceId") long invoiceId);
}

