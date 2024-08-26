package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entities.Hub;

public interface HubRepository extends JpaRepository<Hub,Integer>{
	@Query(value = "SELECT * FROM Hub WHERE City_id = :City_id", nativeQuery = true)
	List<Hub> getHubByCityId(@Param("City_id") int City_id);
}
