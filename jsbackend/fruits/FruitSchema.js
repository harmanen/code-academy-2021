import mongoose from "mongoose";
const Schema = mongoose.Schema;

export default new Schema({
  type: { type: String, enum: ["apple", "pear", "orange"] },
  name: { type: String },
  comment: { type: String },
});
