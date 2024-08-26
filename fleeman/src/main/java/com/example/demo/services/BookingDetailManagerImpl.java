package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.BookingDetail;
import com.example.demo.repositories.BookingDetailRepository;

@Service
public class BookingDetailManagerImpl implements BookingDetailManager{
	@Autowired
	private BookingDetailRepository bookingdetailrepository;

	@Override
	public List<BookingDetail> getBookingDetail() {
		// TODO Auto-generated method stub
		return bookingdetailrepository.findAll();
	}

	@Override
	public BookingDetail addBookingDetail(BookingDetail Book) {
		// TODO Auto-generated method stub
		return bookingdetailrepository.save(Book);
	}

	@Override
	public void deletebooking(int booking_id) {
		bookingdetailrepository.deletebybookingid(booking_id);
		
	}

	@Override
	public List<BookingDetail> getBookingDetailByBookingId(int booking_id) {
		// TODO Auto-generated method stub
		return bookingdetailrepository.getBookingDetailByBookingId(booking_id);
	}
}
