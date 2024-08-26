package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entities.Car;

import jakarta.transaction.Transactional;

public interface CarRepository extends JpaRepository<Car,Long>
{

	@Query(value = "SELECT * FROM Car WHERE hub_id = :hub_id AND Car_Type_ID = :Car_Type_ID AND is_available = 'Y'", nativeQuery = true)
	List<Car> findByHubIdAndCategoryId(@Param("hub_id") long hub_id, @Param("Car_Type_ID") long Car_Type_ID);
	
	@Modifying
	@Transactional
	 @Query(value = "UPDATE Car SET is_Available = 'N' WHERE car_Id = :carId", nativeQuery = true)
	    void updateCarAvailability(@Param("carId") long carId);
	
//	@Modifying
//	@Transactional
//	 @Query(value = "UPDATE Car SET is_Available = 'Y' and Status = :Status WHERE car_Id = :carId", nativeQuery = true)
//	    void returned(@Param("carId") long carId,@Param("Status") String Status);
	
	@Modifying
	@Transactional
	@Query(value = "UPDATE Car SET is_Available = 'Y', Status = :Status WHERE car_Id = :carId", nativeQuery = true)
	void returned(@Param("carId") long carId, @Param("Status") String Status);
}
