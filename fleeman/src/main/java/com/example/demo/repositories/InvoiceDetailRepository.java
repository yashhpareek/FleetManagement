package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.example.demo.entities.Invoice_detail;

public interface InvoiceDetailRepository extends JpaRepository<Invoice_detail, Integer>{

//	@Query(value = "SELECT * FROM Hub WHERE City_id = :City_id", nativeQuery = true)
//	List<Hub> getHubByCityId(@Param("City_id") int City_id);
	
	@Query(value = "SELECT * FROM invoice_detail WHERE Invoice_id = :Invoice_id", nativeQuery = true)
	List<Invoice_detail> getmain(@Param("Invoice_id") int Invoice_id);
}
