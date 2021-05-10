package com.example.demo.controllers;

import com.example.demo.models.Author;
import com.example.demo.repositories.AuthorsRepository;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/Authors")
public class AuthorsController extends CrudController<Author, AuthorsRepository> {

    AuthorsController(AuthorsRepository repository) {
        super(repository);
    }

}
