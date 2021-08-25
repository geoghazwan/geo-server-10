const { Router } = require("express");
const Driver = require("../../models/Driver");

const router = Router();

const santisizeLocation = (payload) => {
  return { ...payload, date: new Date() };
};

router.post("/create", async (req, res) => {
  const payload = santisizeLocation(req.body);
  /** New Location */
  const driver = new Driver(payload);
  /** Save It In Database */
  await driver.save();
  /** Send It Back To The User */
  res.status(200).send({ result: driver });
});

router.get("/", async (_, res) => {
  try {
    const result = await Driver.find();
    res.send({ result });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
