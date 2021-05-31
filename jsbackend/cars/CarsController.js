import { CarModel } from "./CarsRepository.js";

const cars = [
  { id: 1, make: "ford", model: "Mustang" },
  { id: 2, make: "honda", model: "Civic" },
];

export default (app) => {
  app.get("/Cars", async (req, res) => {
    const cars = await CarModel.find({});
    res.send(cars);
  });

  app.post("/Cars", async (req, res) => {
    const { body } = req;

    try {
      const newCar = new CarModel(body);
      await newCar.save();

      res.json(newCar);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  app.delete("/Cars/:id", async (req, res) => {
    const { params } = req;
    await CarModel.findByIdAndDelete(params.id);
    res.end();
  });
};
