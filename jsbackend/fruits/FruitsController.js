export default (app) => {
  app.get("/Fruits", (req, res) => {
    const fruits = [{ type: "apple", name: "Golden" }];
    res.json(fruits);
  });
};
