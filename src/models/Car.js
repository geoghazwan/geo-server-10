const { model, Schema } = require("mongoose");

const CarSchema = new Schema({
  name: {
    type: String,
  },
  registerationDte: {
    type: { long: Date, default: Date.now },
    required: true,
  },
  lastLocation: {
    type: Schema.Types.ObjectId,
    ref: "Location",
  },
  currentLocation: {
    type: Schema.Types.ObjectId,
    ref: "Location",
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
