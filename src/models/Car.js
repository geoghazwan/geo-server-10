const { model, Schema } = require("mongoose");

const CarSchema = new Schema({
  name: {
    type: String,
  },
  function: {
    type: String,
  },
  driver: {
    type: Schema.Types.ObjectId,
    ref: "Location",
  },
  registerationDte: {
    type: { long: Date, default: Date.now },
  },
  lastLocation: {
    type: Schema.Types.ObjectId,
    ref: "Location",
  },
  currentLocation: {
    type: Schema.Types.ObjectId,
    ref: "Location",
  },
  contractExpiration: {
    type: Date,
  },
  destination: {
    type: Schema.Types.ObjectId,
    ref: "Location",
  },
  blacklistedLocation: {
    type: [Schema.Types.ObjectId],
    ref: "Location",
  },
});

const Car = model("Car", CarSchema);

module.exports = Car;
