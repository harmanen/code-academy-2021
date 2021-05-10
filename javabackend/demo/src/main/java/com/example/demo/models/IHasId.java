package com.example.demo.models;

public interface IHasId<T> {
    T getId();

    void setId(T id);
}
