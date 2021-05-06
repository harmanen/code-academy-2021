package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.models.Car;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class CarsController {

    @GetMapping("/Cars")
    public List<Car> index() {
        ArrayList<Car> cars = new ArrayList<Car>();
        cars.add(new Car(1l, "ford", "Mustang"));
        cars.add(new Car(2l, "honda", "Civic"));
        return cars;
    }

    @PostMapping("/Cars")
    public Car addCar(@RequestBody Car newCar) {
        System.out.println(newCar);
        return newCar;
    }

    @DeleteMapping("/Cars/{id}")
    public void deleteCar(@PathVariable Long id) {
        System.out.println("DELETE car with id: " + id);
    }

}
