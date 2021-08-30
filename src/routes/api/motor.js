const { Router } = require("express");
const Car = require("../../models/Car");
const Driver = require("../../models/Driver");
const Location = require("../../models/Location");
const startCar = require("../../utils/startCar");
const stopCar = require("../../utils/stopCar");
const { getAllData } = require("../../utils/getGps");
const path = require("path");
const capture = require("../../utils/photo");

const router = Router();

router.get("/start/:id", async (req, res) => {
  const { lat, lon, speed } = await getAllData();
  console.log({ lat, lon, speed });
  await startCar();
  const location = new Location({
    geo: { lat, long: lon },
    speed,
    date: new Date(),
  });
  console.log({ speed });
  await location.save();
  const destination = new Location({
    geo: { lat, long: lon },
    speed,
    date: new Date(),
  });
  await destination.save();
  const car = await Car.findById(req.params.id);
  car.lastLocation = car.currentLocation;
  car.currentLocation = location._id;
  car.destination = destination._id;
  await car.save();
  res.status(200).send(car);
});

router.get("/stop/:id", async (req, res) => {
  await stopCar();
  const { lat, lon, speed } = await getAllData();
  const location = new Location({
    geo: { lat, long: lon },
    speed,
    date: new Date(),
  });
  const car = await Car.findById(req.params.id);
  car.currentLocation = location._id;
  await car.save();
  res.status(200).send(car);
});

module.exports = router;
