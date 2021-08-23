const { Router, Response } = require("express");
const getGps = require("../../utils/getGps");
const Location = require("../../models/Location");

const router = Router();

const santisizeLocation = (payload) => {
  return { ...payload, date: new Date() };
};

router.post("/create", async (req, res) => {
  const payload = santisizeLocation(req.body);
  /** New Location */
  const location = new Location(payload);
  /** Save It In Database */
  await location.save();
  /** Send It Back To The User */
  res.status(200).send(location);
});

router.get("/", async (_, res) => {
  try {
    const result = await getGps("lat");
    res.send({ result });
  } catch (error) {
    console.error("error" + error);
    res.status(500).send(error);
  }
});

module.exports = router;
