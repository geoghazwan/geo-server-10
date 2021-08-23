import { pythonScripts } from "../scripts";
import { promisify } from "util";
const exec = promisify(require("child_process").exec);

export const runScript = async (script: string): Promise<void> => {
  const output = await exec(script);
  console.log({ ooooooooo: output });
  return output;
};
