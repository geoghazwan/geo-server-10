/** Libraries */
import bodyParser from "body-parser";
import express from "express";
/** Database */
import connectDB from "../config/database";
/** Routes */
import location from "./routes/api/location";
import car from "./routes/api/car";

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
const port = app.get("port");
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;
