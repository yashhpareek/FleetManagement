package com.example.demo.repositories;

import com.example.demo.entities.Booking;
import jakarta.transaction.Transactional;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface BookingRepository extends JpaRepository<Booking, Long> {

    @Query(value = "select * from booking where email_id = :email_id", nativeQuery = true)
    public List<Booking> getBookingByEmailId(@Param("email_id") String emailId);

}
