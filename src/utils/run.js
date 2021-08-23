const { promisify } = require("util");
const exec = promisify(require("child_process").exec);
const path = require("path");

const runScript = async (script) => {
  const output = await exec(`python ${path.resolve(__dirname, "lat.py")}`);
  console.log({ ooooooooo: output });
  return output;
};

runScript("")
  .then((data) => {
    console.log(data.stdout.replace("/\n", ""));
  })
  .then((error) => {
    console.log({ error });
  });
