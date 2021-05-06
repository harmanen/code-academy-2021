package com.example.demo.models;

public class Fruit {
  private String type;
  private String name;

  public Fruit(String type, String name) {
    this.type = type;
    this.name = name;
  }

  public String getType() {
    return this.type;
  }

  public String getName() {
    return this.name;
  }
}
