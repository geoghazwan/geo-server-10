const { promisify } = require("util");
const exec = promisify(require("child_process").exec);
const path = require("path");

async function startCar() {
  try {
    const output = await exec(
      `python ${path.resolve(__dirname, "stop" + ".py")}`
    );
    return output.stdout.replace("\n", "");
  } catch {}
}

module.exports = startCar;
