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
  await startCar();
  res.status(200).send({});
});

router.get("/stop/:id", async (req, res) => {
  await stopCar();
  res.status(200).send({});
});

module.exports = router;
