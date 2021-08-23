const { promisify } = require("util");
const exec = promisify(require("child_process").exec);
const path = require("path");

const getGPS = async (script) => {
  console.log("got her");
  const output = await exec(`python ${path.resolve(__dirname, "lat" + ".py")}`);
  console.log({ ssssss: script });
  return output.stdout.replace("\n", "");
};

module.exports = { getGPS };
