package com.example.demo.models;

public class Car {
  private Long id;
  private String make;
  private String model;

  public Car(Long id, String make, String model) {
    this.id = id;
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
}
