package com.example.demo.entities;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "booking_detail")
public class BookingDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_detail_id")
    private Long bookingDetailId;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "booking_id", nullable = false)
    private Booking booking;

    @Column(name = "addon_id")
    private Long addonId;

    @Column(name = "addon_rate")
    private BigDecimal addonRate;

    // Constructors, getters, and setters
    // You can generate these using your IDE or manually write them

    public BookingDetail() {
        // Default constructor required by JPA
    }

    // Getters and setters
    public Long getBookingDetailId() {
        return bookingDetailId;
    }

    public void setBookingDetailId(Long bookingDetailId) {
        this.bookingDetailId = bookingDetailId;
    }

    public Booking getBooking() {
        return booking;
    }

//    public void setBooking(Booking booking) {
//        this.booking = booking;
//    }

    public Long getAddonId() {
        return addonId;
    }

    public void setAddonId(Long addonId) {
        this.addonId = addonId;
    }

    public BigDecimal getAddonRate() {
        return addonRate;
    }

    public void setAddonRate(BigDecimal addonRate) {
        this.addonRate = addonRate;
    }
}
