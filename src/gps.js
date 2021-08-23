const Gpio = require("onoff").Gpio;
const led = new Gpio(10, "out");

led.watch((result) => {
  console.log({ rrrrrrrr: result });
});
