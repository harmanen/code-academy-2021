package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.models.Fruit;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class FruitsController {

    @GetMapping("/Fruits")
    public List<Fruit> index() {
        ArrayList<Fruit> fruits = new ArrayList<Fruit>();
        fruits.add(new Fruit("banana", "Caverion"));
        fruits.add(new Fruit("pear", "Concorde"));
        fruits.add(new Fruit("apple", "Machintosh"));
        return fruits;
    }

}
