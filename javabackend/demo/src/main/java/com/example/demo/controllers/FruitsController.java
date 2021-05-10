package com.example.demo.controllers;

import com.example.demo.models.Fruit;
import com.example.demo.repositories.FruitsRepository;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/Fruits")
public class FruitsController extends CrudController<Fruit, FruitsRepository> {

    FruitsController(FruitsRepository repository) {
        super(repository);
    }

}
