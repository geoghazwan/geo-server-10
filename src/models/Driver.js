const { model, Schema } = require("mongoose");

const DriverSchema = new Schema({
  name: {
    type: String,
  },
  date: {
    type: Date,
  },
});

const Driver = model("Driver", DriverSchema);

module.exports = Driver;
