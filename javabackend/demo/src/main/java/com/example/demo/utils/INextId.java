package com.example.demo.utils;

public interface INextId {
    Long getId();

    default Long nextId() {
        return getId() + 1;
    }
}
