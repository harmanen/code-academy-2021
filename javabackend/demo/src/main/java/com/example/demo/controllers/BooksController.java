package com.example.demo.controllers;

import com.example.demo.models.Book;
import com.example.demo.repositories.BooksRepository;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/Books")
public class BooksController extends CrudController<Book, BooksRepository> {

    BooksController(BooksRepository repository) {
        super(repository);
    }

}
