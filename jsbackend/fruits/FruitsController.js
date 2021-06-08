import { secure } from "../AuthController.js";
import { FruitModel } from "./FruitsRepository.js";

export default (app) => {
  app.get(
    "/Fruits",
    /*secure("USER", "ADMIN"),*/ async (req, res) => {
      const { perPage = "20", page = "1" } = req.query;
      const fruits = await FruitModel.find({})
        .limit(parseInt(perPage))
        .skip(parseInt(perPage) * (parseInt(page) - 1))
        .sort("-_id")
        .populate("color");
      res.json(fruits);
    }
  );

  app.post(
    "/Fruits",
    /*secure("ADMIN"),*/ async (req, res) => {
      const { body } = req;

      try {
        const newFruit = new FruitModel(body);
        await newFruit.save();

        res.json(newFruit);
      } catch (err) {
        res.status(400).send(err);
      }
    }
  );

  app.delete(
    "/Fruits/:id",
    /*secure("ADMIN"),*/ async (req, res) => {
      const { params } = req;
      await FruitModel.findByIdAndDelete(params.id);
      res.end();
    }
  );
};
