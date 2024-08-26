package com.example.demo.services;

import java.util.List;

import com.example.demo.entities.Booking;

public interface BookingService {
	Booking save(Booking booking);
    public List<Booking> getBookingByEmailId(String emailId);
//  void deleteBooking(Booking booking);
  void deleteBooking(Long bookingId);
}

