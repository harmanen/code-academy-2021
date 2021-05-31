import mongoose from "mongoose";
import FrtuiSchema from "./FruitSchema.js";

export const FruitModel = mongoose.model("Fruit", FrtuiSchema);
