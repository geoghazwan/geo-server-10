const { Router } = require("express");
const Car = require("../../models/Car");
const Driver = require("../../models/Driver");
const Location = require("../../models/Location");

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
    const result = await Car.find();
    const cars = await Promise.all(
      result.map(async (r) => {
        const driver = await Driver.findById(r.driver);
        console.log({ driver });
        const destination = await Location.findById(r.destination);
        console.log({ destination });
        return { ...r._doc, driver: driver, destination };
      })
    );
    res.status(200).send({ result: cars });
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
