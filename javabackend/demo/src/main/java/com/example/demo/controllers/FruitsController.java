package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.models.Fruit;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class FruitsController {

    @GetMapping("/Fruits")
    public List<Fruit> index() {
        ArrayList<Fruit> fruits = new ArrayList<Fruit>();
        fruits.add(new Fruit(1l, "banana", "Caverion"));
        fruits.add(new Fruit(2l, "pear", "Concorde"));
        fruits.add(new Fruit(3l, "apple", "Machintosh"));
        return fruits;
    }

    @PostMapping("/Fruits")
    public Fruit addFruit(@RequestBody Fruit newFruit) {
        System.out.println(newFruit);
        return newFruit;
    }

    @DeleteMapping("/Fruits/{id}")
    public void deleteFruit(@PathVariable Long id) {
        System.out.println("DELETE fruit with id: " + id);
    }
}
