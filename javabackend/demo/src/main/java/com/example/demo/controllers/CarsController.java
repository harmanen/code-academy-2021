package com.example.demo.controllers;

import java.util.List;

import com.example.demo.models.Car;
import com.example.demo.repositories.CarsRepository;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @GetMapping("/Cars/{id}")
    public Car getCar(@PathVariable Long id) {
        return this.repository.findById(id).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Could not find entity with id: " + id));
    }

    @PostMapping("/Cars")
    public Car addCar(@RequestBody Car newCar) {
        return this.repository.save(newCar);
    }

    @PutMapping("/Cars/{id}")
    public Car replaceCar(@RequestBody Car newCar, @PathVariable Long id) {
        newCar.setId(id);
        return this.repository.save(newCar);
    }

    @PatchMapping("/Cars/{id}")
    public Car patchCar(@RequestBody Car newCar, @PathVariable Long id) {
        Car oldCar = this.getCar(id);
        if (newCar.getMake() != null) {
            oldCar.setMake(newCar.getMake());
        }
        if (newCar.getModel() != null) {
            oldCar.setModel(newCar.getModel());
        }
        return this.repository.save(oldCar);
    }

    @DeleteMapping("/Cars/{id}")
    public void deleteCar(@PathVariable Long id) {
        try {
            this.repository.deleteById(id);
        } catch (DataAccessException error) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Could not find entity with id: " + id);
        }
    }
}
