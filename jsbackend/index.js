import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import * as redis from "../redis.js";

const app = express();
const port = 3000;

const VERY_SECRET_KEY = "akjngfwoeinoi2n3n2rlk3nlknslf";
app.use(cookieParser(VERY_SECRET_KEY));
app.use(bodyParser.json());

const {
  MONGO_HOST = "localhost",
  MONGO_USER = "root",
  MONGO_PASSWORD = "example",
  MONGOD_DB = "code_academy",
} = process.env;

await mongoose.connect(
  `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGOD_DB}?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

import AuhtController from "./AuthController.js";
import GraphQlController from "./GraphQlController.js";
import SampleController from "./SampleController.js";
import GeoCodingController from "./geocoding/GeoCodingController.js";
import FruitsController from "./fruits/FruitsController.js";

AuhtController(app);
GraphQlController(app);
SampleController(app);
GeoCodingController(app, redis, GeoCodingController.ALL_GEOCODE_FUNCTIONS);
FruitsController(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
