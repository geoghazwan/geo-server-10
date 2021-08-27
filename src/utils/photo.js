const { promisify } = require("util");
const exec = promisify(require("child_process").exec);
const path = require("path");

async function startCar() {
  try {
    const output = await exec(
      `python ${path.resolve(__dirname, "photo" + ".py")}`
    );
    console.log({ oooooo: output });
    return output.stdout.replace("\n", "");
  } catch (err) {
    console.log({ errors: err });
  }
}

module.exports = startCar;
