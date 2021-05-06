package com.example.demo.controllers;

import java.util.List;

import com.example.demo.models.Fruit;
import com.example.demo.repositories.FruitsRepository;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class FruitsController {
    private final FruitsRepository repository;

    FruitsController(FruitsRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/Fruits")
    public List<Fruit> getFruits() {
        return this.repository.findAll();
    }

    @PostMapping("/Fruits")
    public Fruit addFruit(@RequestBody Fruit newFruit) {
        return this.repository.save(newFruit);
    }

    @DeleteMapping("/Fruits/{id}")
    public void deleteFruit(@PathVariable Long id) {
        this.repository.deleteById(id);
    }

}
