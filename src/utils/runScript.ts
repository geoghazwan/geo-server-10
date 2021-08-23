import { pythonScripts } from "../scripts";
import { promisify } from "util";
const exec = promisify(require("child_process").exec);

export const runScript = async (script: string): Promise<void> => {
  const output = await exec(script);
  console.log({ ooooooooo: output });
  return output;
};

export const runPy = new Promise(function (success, nosuccess) {
  const { spawn } = require("child_process");
  const pyprog = spawn("sudo python", ["./../pypy.py"]);

  pyprog.stdout.on("data", function (data: any) {
    success(data);
  });

  pyprog.stderr.on("data", (data: any) => {
    nosuccess(data);
  });
});
