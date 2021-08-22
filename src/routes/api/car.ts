import { Router, Response } from "express";
import Request from "../../types/Request";
import Car, { ICar } from "../../models/Car";
import { pythonScripts } from "../../scripts";
import { runScript } from "../../utils/runScript";
const router: Router = Router();

const santisizeCar = (payload: ICar): ICar => {
  return { ...payload, registerationDte: new Date() } as ICar;
};

router.post("/create", async (req: Request, res: Response) => {
  const payload = santisizeCar(req.body as ICar);
  /** New Location */
  const car = new Car(payload);
  /** Save It In Database */
  await car.save();
  /** Send It Back To The User */
  res.status(200).send(car);
});

router.get("/", async (_, res: Response) => {
  try {
    const aa = await runScript(pythonScripts.getLocation);
    res.status(200).send({ result: aa });
  } catch (error) {
    console.error("error" + error);
    res.status(500).send(error);
  }
});

export default router;
