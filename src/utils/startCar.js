async function startCar() {
  const output = await exec(
    `python ${path.resolve(__dirname, "start" + ".py")}`
  );
  return output.stdout.replace("\n", "");
}

module.exports = startCar;
