import { Router, Response } from "express";
import Request from "../../types/Request";
import Location, { ILocation } from "../../models/Location";
import { runScript } from "../../utils/runScript";
import { pythonScripts } from "../../scripts";

const router: Router = Router();

const santisizeLocation = (payload: ILocation): ILocation => {
  return { ...payload, date: new Date() } as ILocation;
};

router.post("/create", async (req: Request, res: Response) => {
  const payload = santisizeLocation(req.body as ILocation);
  /** New Location */
  const location = new Location(payload);
  /** Save It In Database */
  await location.save();
  /** Send It Back To The User */
  res.status(200).send(location);
});

router.get("/", async (_, res: Response) => {
  try {
    // const locations = await Location.find();
    // await runScript(pythonScripts.getLocation);
    // res.status(200).send({ result: locations });
    console.log("hit");
  } catch (error) {
    console.error("error" + error);
    res.status(500).send(error);
  }
});

export default router;
