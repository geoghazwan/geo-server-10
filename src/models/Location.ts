import { Document, Model, model, Schema } from "mongoose";

/**
 * Interface to model the User Schema for TypeScript.
 * @param email:string
 * @param password:string
 * @param avatar:string
 */
export interface ILocation extends Document {
  geo: { long: string; lat: string };
  speed: number;
  date: Date;
}

const LocationSchema: Schema = new Schema({
  geo: {
    type: { long: String, lat: String },
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Location: Model<ILocation> = model(
  "Location",
  LocationSchema
) as unknown as Model<ILocation>;

export default Location;
