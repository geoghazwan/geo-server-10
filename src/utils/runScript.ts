import { pythonScripts } from "../scripts";
import { promisify } from "util";
const exec = promisify(require("child_process").exec);

export const runScript = async (script: string): Promise<void> => {
  const output = await exec(script);
  const stringified = JSON.stringify(output.stdout);
  console.log({ oooooooo: output });
  return output.stdout;
};
