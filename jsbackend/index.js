const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const {
    headers: { cookie },
    params,
    query,
  } = req;
  console.log({ cookie, params, query });
  res.setHeader("Set-Cookie", "trackerId=tosi_salainen_koodi");
  res.send("Hello World!");
});

app.get("/Fruits", (req, res) => {
  const fruits = [{ type: "apple", name: "Golden" }];
  res.json(fruits);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
