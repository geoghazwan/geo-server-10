const { promisify } = require("util");
const exec = promisify(require("child_process").exec);
const path = require("path");

async function stopCar() {
  try {
    const output = await exec(
      `python ${path.resolve(__dirname, "start" + ".py")}`
    );
    return output.stdout.replace("\n", "");
  } catch {}
}

module.exports = stopCar;
