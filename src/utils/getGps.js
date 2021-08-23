const { promisify } = require("util");
const exec = promisify(require("child_process").exec);
const path = require("path");

const getGPS = async (script) => {
  const output = await exec(
    `python ${path.resolve(__dirname, script + ".py")}`
  );
  return output.stdout.replace("\n", "");
};

module.exports = { getGPS };
