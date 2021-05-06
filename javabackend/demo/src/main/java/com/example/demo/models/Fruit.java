package com.example.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Fruit {
    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;
    private String type;
    private String name;

    Fruit() {
    }

    public Fruit(String type, String name) {
        this.type = type;
        this.name = name;
    }

    public Long getId() {
        return this.id;
    }

    public String getType() {
        return this.type;
    }

    public String getName() {
        return this.name;
    }

    public String toString() {
        return "Fruit - type: " + this.type + ", name: " + this.name;
    }
}
