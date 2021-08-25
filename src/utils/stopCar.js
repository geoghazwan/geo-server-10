async function stopCar() {
  const output = await exec(
    `python ${path.resolve(__dirname, "stop" + ".py")}`
  );
  return output.stdout.replace("\n", "");
}

module.exports = stopCar;
