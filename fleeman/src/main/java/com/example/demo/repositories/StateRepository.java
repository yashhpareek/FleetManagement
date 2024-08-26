package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.State;

public interface StateRepository extends JpaRepository<State, Integer>{

}
