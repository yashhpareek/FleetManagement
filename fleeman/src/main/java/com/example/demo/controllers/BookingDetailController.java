package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.BookingDetail;

import com.example.demo.services.BookingDetailManager;

@RestController
@CrossOrigin
public class BookingDetailController {
	@Autowired
	private BookingDetailManager booking;
	@GetMapping("/bookingdetails")
	public List<BookingDetail> getAllAddOns() {
		
		return booking.getBookingDetail();
		
	}
	@PostMapping("/bookingdetails")
	public BookingDetail postAllAddOns(@RequestBody BookingDetail booking2) {
		
		return booking.addBookingDetail(booking2);
		
	}

	@GetMapping("/bookingdetails/{deletebooking}")
	public void delete(@PathVariable int deletebooking) {
		
		 booking.deletebooking(deletebooking);
		
	}
	
	@GetMapping("/bookingdetails/booking_id/{booking_id}")
	public List<BookingDetail> getBookingDetailByBookingId(@PathVariable int booking_id) {
		return booking.getBookingDetailByBookingId(booking_id);
	}
}
