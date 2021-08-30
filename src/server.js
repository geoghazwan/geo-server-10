/** Libraries */
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
/** Database */
const connectDB = require("../config/database");
/** Routes */
const location = require("./routes/api/location");
const car = require("./routes/api/car");
const driver = require("./routes/api/driver");
const motor = require("./routes/api/motor");
const { getAllData } = require("./utils/getGps");
const port = 5000;

/** Server Instance */
const app = express();
/** Database Connection */
connectDB();
/** Global Middlewares */
app.use(cors());
app.options("*", cors());
app.set("port", process.env.PORT || port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/** Registr Routes */
app.use("/api/location", location);
app.use("/api/car", car);
app.use("/api/driver", driver);
app.use("/api/motor", motor);

app.get("/loc", async (req, res) => {
  const { lat, lon } = await getAllData();
  const a = { lat: "33.493987191377556", long: "36.31745004694769", speed: 10 };
  res.status(200).send({ geo: a });
});

/** Run The App */
const server = app.listen(port, () =>
  console.log(`Server started on ports ${port}`)
);

module.exports = server;
