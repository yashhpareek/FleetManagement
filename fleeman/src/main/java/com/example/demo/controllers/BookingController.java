package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Booking;
import com.example.demo.services.BookingService;

@RestController
@CrossOrigin
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @CrossOrigin
    @PostMapping("/api/addbooking")
    public Booking save(@RequestBody  Booking booking) {
        return bookingService.save(booking);
    }


    @CrossOrigin
    @GetMapping("/api/booking/email/{emailId}")
    public List<Booking> getBookingByEmailId(@PathVariable String emailId)
    {
        return bookingService.getBookingByEmailId(emailId);
    }
    @CrossOrigin
    @DeleteMapping("/api/deletebooking/{bookingId}")
    public void deleteBooking(@PathVariable Long bookingId) {
        bookingService.deleteBooking(bookingId);
        System.out.println("deleted_controller");
    }
    
//    @CrossOrigin
//    @DeleteMapping("/api/deletebooking")
//    public void deleteBooking(@RequestBody Booking booking) {
//        bookingService.deleteBooking(booking);
//        System.out.println("deleted_controller");
//    }
}
