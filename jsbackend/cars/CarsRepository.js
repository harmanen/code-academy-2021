import mongoose from "mongoose";
import CarsSchema from "./CarsSchema.js";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const CarModel = mongoose.model("Car", CarsSchema);
export const CarTC = composeWithMongoose(CarModel);
