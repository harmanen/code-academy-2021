import mongoose from "mongoose";
import FruitSchema from "./FruitSchema.js";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const FruitModel = mongoose.model("Fruit", FruitSchema);
export const FruitTC = composeWithMongoose(FruitModel);
