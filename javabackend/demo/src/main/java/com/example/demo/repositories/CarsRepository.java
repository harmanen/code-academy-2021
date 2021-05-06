package com.example.demo.repositories;

import com.example.demo.models.Car;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CarsRepository extends JpaRepository<Car, Long> {

}
