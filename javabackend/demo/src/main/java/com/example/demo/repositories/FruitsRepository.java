package com.example.demo.repositories;

import com.example.demo.models.Fruit;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FruitsRepository extends JpaRepository<Fruit, Long> {

}
