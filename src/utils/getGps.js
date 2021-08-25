const { promisify } = require("util");
const exec = promisify(require("child_process").exec);
const path = require("path");

async function getGPS(script) {
  const output = await exec(
    `python ${path.resolve(__dirname, script + ".py")}`
  );
  return output.stdout.replace("\n", "");
}

const getAllData = async function () {
  try {
    const lat = await getGPS("lat");
    const lon = await getGPS("lon");
    const speed = await getGPS("speed");
    console.log({ lat, lon, speed });
    return { lat, lon, speed };
  } catch (error) {
    return { lat: "33.493987191377556", lon: "36.31745004694769" };
  }
};

module.exports.getGPS = getGPS;
module.exports.getAllData = getAllData;
