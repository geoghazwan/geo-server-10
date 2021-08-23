const { Router, Response } = require("express");
const Car = require("../../models/Car");
const router = Router();

const santisizeCar = (payload) => {
  return { ...payload, registerationDte: new Date() };
};

router.post("/create", async (req, res) => {
  const payload = santisizeCar(req.body);
  /** New Location */
  const car = new Car(payload);
  /** Save It In Database */
  await car.save();
  /** Send It Back To The User */
  res.status(200).send(car);
});

router.get("/", async (_, res) => {
  try {
    const aa = await runScript(pythonScripts.getLocation);
    res.status(200).send({ result: aa });
  } catch (error) {
    console.error("error" + error);
    res.status(500).send(error);
  }
});

module.exports = router;
