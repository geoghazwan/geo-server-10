const { Router } = require("express");
const Car = require("../../models/Car");
const Driver = require("../../models/Driver");
const Location = require("../../models/Location");
const startCar = require("../../utils/startCar");
const stopCar = require("../../utils/stopCar");
const { getAllData } = require("../../utils/getGps");
const path = require("path");
const capture = require("../../utils/capture");

const router = Router();

const santisizeCar = (payload) => {
  return {
    ...payload,
    registerationDte: new Date(),
    destination: "6126525c46e9ab15054297c9",
  };
};

router.get("/path/:id", async (req, res) => {
  const car = await Car.findById(req.params.id);
  res.status(200).send({ from: car.lastLocation, to: car.currentLocation });
});

router.get("/single/:id", async (req, res) => {
  const car = await Car.findById(req.params.id);
  const driver = await Driver.findById(car.driver);
  const location = await Location.findById(car.currentLocation);
  res.status(200).send({ ...car._doc, driver, location });
});

router.get("/capture", async (req, res) => {
  // await capture();
  const result = path.resolve(__dirname, "../../utils/image.jpg");
  res.sendFile(result);
});

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
  console.log({ lat, lon, speed });
  await startCar();
  res.status(200).send({});

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
  const car = await Car.findById(req.body.id);
  car.lastLocation = car.currentLocation;
  car.currentLocation = location._id;
  car.destination = destination._id;
  await car.save();
  console.log("llllllll");
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
    const result = await Car.find().sort("-registerationDte");
    const cars = await Promise.all(
      result.map(async (r) => {
        const driver = await Driver.findById(r.driver);
        const destination = await Location.findById(r.destination);
        return { ...r._doc, driver: driver, destination };
      })
    );
    res.status(200).send({ result: cars });
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
