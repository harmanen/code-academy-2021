package com.example.demo.utils;

public class MyOwnMath {
    public static final float PI = 3.14f;

    public static enum Shape {
        CIRCLE, SQUARE
    }

    public static float calculatePerimeter(Shape shape, float radius) {
        switch (shape) {
            case CIRCLE:
                return MyOwnMath.PI * radius * radius;
            case SQUARE:
                return radius * 4;
            default:
                return 0;
        }
    }

    public static MyOwnMath createFromJson(String json) {
        MyOwnMath myOwnMath = new MyOwnMath();
        // Parse JSON and fill values
        return myOwnMath;
    }
}
