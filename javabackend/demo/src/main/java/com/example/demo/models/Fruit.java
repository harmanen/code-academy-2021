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

    public Fruit() {
    }

    public Fruit(Long id, String type, String name) {
        this.id = id;
        this.type = type;
        this.name = name;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Fruit id(Long id) {
        setId(id);
        return this;
    }

    public Fruit type(String type) {
        setType(type);
        return this;
    }

    public Fruit name(String name) {
        setName(name);
        return this;
    }

    @Override
    public String toString() {
        return "{" + " id='" + getId() + "'" + ", type='" + getType() + "'" + ", name='" + getName() + "'" + "}";
    }
}