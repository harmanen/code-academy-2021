package com.example.demo.controllers;

import java.util.List;

import com.example.demo.models.Car;
import com.example.demo.repositories.CarsRepository;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class CarsController {
    private final CarsRepository repository;

    CarsController(CarsRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/Cars")
    public List<Car> getCars() {
        return this.repository.findAll();
    }

    @PostMapping("/Cars")
    public Car addCar(@RequestBody Car newCar) {
        return this.repository.save(newCar);
    }

    @DeleteMapping("/Cars/{id}")
    public void deleteCar(@PathVariable Long id) {
        this.repository.deleteById(id);
    }
}
