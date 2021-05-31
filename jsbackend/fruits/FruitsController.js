import { secure } from "../AuthController.js";

const fruits = [{ id: 1, type: "apple", name: "Golden" }];

export default (app) => {
  app.get("/Fruits", secure("USER", "ADMIN"), (req, res) => {
    res.json(fruits);
  });

  app.post("/Fruits", secure("ADMIN"), (req, res) => {
    const { body } = req;
    const { type, name } = body;

    const id = fruits.reduce((maxId, fruit) => Math.max(maxId, fruit.id), 0);

    const newFruit = { id: id + 1, type, name };

    fruits.push(newFruit);
    res.json(newFruit);
  });

  app.delete("/Fruits/:id", secure("ADMIN"), (req, res) => {
    const { params } = req;

    const n = fruits.findIndex((fruit) => fruit.id === parseInt(params.id));

    if (n > -1) {
      fruits.splice(n, 1);
    }

    res.end();
  });
};
