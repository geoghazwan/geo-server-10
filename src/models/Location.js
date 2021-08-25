const { model, Schema } = require("mongoose");

const LocationSchema = new Schema({
  geo: {
    type: { long: String, lat: String },
  },
  speed: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Location = model("Location", LocationSchema);

module.exports = Location;
