import mongoose from "mongoose";
import CarsSchema from "./CarsSchema.js";

export const CarModel = mongoose.model("Car", CarsSchema);
