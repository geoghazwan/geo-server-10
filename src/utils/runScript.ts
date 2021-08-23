import { pythonScripts } from "../scripts";
import { promisify } from "util";
const exec = promisify(require("child_process").exec);
import { PythonShell } from "python-shell";

export const runScript = async (script: string): Promise<void> => {
  const output = await exec(script);
  console.log({ ooooooooo: output });
  return output;
};

export const runPy = () => {
  PythonShell.runString("print 1", {}, (error: any, output: any) => {
    console.log({ error, output });
  });
};
