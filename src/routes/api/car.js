const { Router } = require("express");
const Car = require("../../models/Car");
const Driver = require("../../models/Driver");
const Location = require("../../models/Location");
const startCar = require("../../utils/startCar");
const stopCar = require("../../utils/stopCar");
const { getAllData } = require("../../utils/getGps");

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

router.post("/start", async (req, res) => {
  const { lat, lon, speed } = await getAllData();
  await startCar();
  const location = new Location({
    geo: { lat, long: lon },
    speed,
    date: new Date(),
  });
  await location.save();
  const destination = new Location({
    geo: { lat: req.body.lat, long: req.body.lon },
    speed,
    date: new Date(),
  });
  await destination.save();
  const car = await Car.findById(req.body.id);
  car.lastLocation = car.currentLocation;
  car.currentLocation = location._id;
  car.destination = destination._id;
  await car.save();
  res.status(200).send(car);
});

router.post("/stop", async (req, res) => {
  await stopCar();
  const { lat, lon, speed } = await getAllData();
  const location = new Location({
    geo: { lat, long: lon },
    speed,
    date: new Date(),
  });
  const car = await Car.findById(req.body.id);
  car.currentLocation = location._id;
  await car.save();
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
