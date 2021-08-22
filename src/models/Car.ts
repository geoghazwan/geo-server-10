import { Document, Model, model, Schema } from "mongoose";
import { ILocation } from "./Location";

/**
 * Interface to model the User Schema for TypeScript.
 * @param email:string
 * @param password:string
 * @param avatar:string
 */
export interface ICar extends Document {
  currentLocation: ILocation;
  lastLocation: ILocation;
  destination: ILocation;
  registerationDte: Date;
}

const CarSchema: Schema = new Schema({
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
});

const Car: Model<ILocation> = model(
  "Car",
  CarSchema
) as unknown as Model<ILocation>;

export default Car;
