package com.example.demo.utils;

public class MyOwnList<T> {
    private T[] values;

    public void add(T value) {
        values[0] = value;
    }

    public T get(int index) {
        return values[index];
    }
}
