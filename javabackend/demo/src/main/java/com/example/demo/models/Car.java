package com.example.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Car {
    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;
    private String make;
    private String model;

    Car() {
    }

    public Car(Long id, String make, String model) {
        this.make = make;
        this.model = model;
    }

    public Long getId() {
        return this.id;
    }

    public String getMake() {
        return this.make;
    }

    public String getModel() {
        return this.model;
    }

    public String toString() {
        return "Car - make: " + this.make + ", model: " + this.model;
    }
}
