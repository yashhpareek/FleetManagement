package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entities.City;

public interface CityRepository extends JpaRepository<City, Integer>{
	@Query(value = "SELECT * FROM City_master WHERE state_id = :state_id", nativeQuery = true)
	List<City> getCitybyState(@Param("state_id") int state_id);
}
