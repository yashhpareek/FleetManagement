package com.example.demo.services;

import com.example.demo.entities.Booking;
import com.example.demo.repositories.BookingRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingServiceImpl implements BookingService {


    @Autowired
    private BookingRepository bookingrepository;

    @Override
    public Booking save(Booking booking) {
        return bookingrepository.save(booking);
    }

    @Override
    public List<Booking> getBookingByEmailId(String emailId) {
        return bookingrepository.getBookingByEmailId(emailId);
    }
    @Override
	public void deleteBooking(Long bookingId) {
		bookingrepository.deleteById(bookingId);;
		System.out.println("deleted_service");
	}
	
//	@Override
//	public void deleteBooking(Booking booking) {
//		bookingrepository.delete(booking);;
//		System.out.println("deleted_service");
//	}
}
