import { promisify } from "util";
const exec = promisify(require("child_process").exec);
import { PythonShell } from "python-shell";
import path from "path";
export const runScript = async (script) => {
  const output = await exec(`python ${path.resolve(__dirname, "py2.py")}`);
  console.log({ ooooooooo: output });
  return output;
};

runScript("")
  .then((data) => {
    console.log(data);
  })
  .then((error) => {
    console.log({ error });
  });
