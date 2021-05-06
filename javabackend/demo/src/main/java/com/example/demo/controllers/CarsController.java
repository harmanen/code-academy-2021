package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.models.Car;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class CarsController {

    @GetMapping("/Cars")
    public List<Car> index() {
        ArrayList<Car> cars = new ArrayList<Car>();
        cars.add(new Car(1l, "ford", "Mustang"));
        cars.add(new Car(2l, "honda", "Civic"));
        return cars;
    }

}
