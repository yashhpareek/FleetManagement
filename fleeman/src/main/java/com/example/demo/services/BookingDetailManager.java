package com.example.demo.services;


import java.util.List;

import org.springframework.data.repository.query.Param;

import com.example.demo.entities.BookingDetail;


public interface BookingDetailManager {
	List<BookingDetail> getBookingDetail();
	BookingDetail addBookingDetail(BookingDetail Book);
	void deletebooking(int booking_id);
	List<BookingDetail> getBookingDetailByBookingId(int booking_id);
}
