import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

const VERY_SECRET_KEY = "akjngfwoeinoi2n3n2rlk3nlknslf";
app.use(cookieParser(VERY_SECRET_KEY));
app.use(bodyParser.json());

import AuhtController from "./AuthController.js";
import SampleController from "./SampleController.js";
import FruitsController from "./fruits/FruitsController.js";

AuhtController(app);
SampleController(app);
FruitsController(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
