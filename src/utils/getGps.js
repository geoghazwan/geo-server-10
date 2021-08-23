const { promisify } = require("util");
const exec = promisify(require("child_process").exec);
const path = require("path");

async function getGPS(script) {
  console.log("got her");
  const output = await exec(`python ${path.resolve(__dirname, "lat" + ".py")}`);
  console.log({ ssssss: script });
  return output.stdout.replace("\n", "");
}

const getAllData = async function () {
  const data = Promise.all(async () => {
    try {
      const lat = await getGPS("lat");
      const lon = await getGPS("lon");
      const speed = await getGPS("speed");
      console.log({ lat, lon, speed });
      return { lat, lon, speed };
    } catch (error) {
      console.log({ Error: error });
    }
  });
};

getAllData()
  .then((data) => {
    console.log({ ddddd: data });
  })
  .catch((error) => {
    console.log({ error: error });
  });

module.exports = getGPS;
