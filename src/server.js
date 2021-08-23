/** Libraries */
const bodyParser = require("body-parser");
const express = require("express");
/** Database */
const connectDB = require("../config/database");
/** Routes */
const location = require("./routes/api/location");
const car = require("./routes/api/car");

/** Server Instance */
const app = express();
/** Database Connection */
connectDB();
/** Global Middlewares */
app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/** Registr Routes */

app.use("/api/location", location);
app.use("/api/car", car);
/** Run The App */

const server = app.listen(3000, () =>
  console.log(`Server started on port ${3000}`)
);

module.exports = server;
