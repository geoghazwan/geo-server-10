const { promisify } = require("util");
const exec = promisify(require("child_process").exec);
const path = require("path");

async function capture() {
  const output = await exec(
    `python ${path.resolve(__dirname, "capture" + ".py")}`
  );
  return output.stdout.replace("\n", "");
}

module.exports = capture;
