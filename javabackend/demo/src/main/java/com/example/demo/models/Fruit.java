package com.example.demo.models;

public class Fruit {
    private Long id;
    private String type;
    private String name;

    public Fruit(Long id, String type, String name) {
        this.id = id;
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
